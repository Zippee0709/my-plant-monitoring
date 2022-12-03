import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Navbar, Text, Avatar, Button } from '@nextui-org/react';

import PlantIcon from '../icons/PlantIcon';
import PowerIcon from '../icons/PowerIcon';
import styles from './UserNavbar.module.scss';
import AuthContext from '../../contexts/auth.context';
import { useShallowEffect } from '@mantine/hooks';
import { RequestFailedResponseType } from '../../types/clientApi.types';
import { UserType } from '../../types/user.types';
import { useRouter } from 'next/router';
import NotificationModal from '../modals/NotificationModal';

const UserNavbar = () => {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  const [name, setName] = useState<string>('');
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useShallowEffect(() => {
    const updateUserInfos = async () => {
      if (authContext) {
        const rep = await authContext.GetCurrentUser();
        if ((rep as RequestFailedResponseType).error) {
          // TODO: repair this
          // toast.error(t('errors.default'), {
          //   position: 'top-right',
          //   autoClose: 2500,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: false,
          //   draggable: true,
          //   progress: undefined,
          //   theme: 'dark',
          // });
          router.push('/auth/signin');
          return;
        }
        const user = rep as UserType;
        authContext!.user = user;
        setName(`${user.firstname} ${user.lastname}`);
        setIsAdmin(user.admin);
      }
    };
    updateUserInfos();
  }, [authContext]);

  const handleLogout = () => {
    if (authContext) {
      authContext.Logout();
      router.push('/');
    }
  };

  return (
    <Navbar variant='static' maxWidth='fluid' css={{ justifyContent: 'space-between' }}>
      <Navbar.Brand>
        <Link href='/dashboard' className={styles['brand-link']}>
          <PlantIcon color='#224722' width={40} height={40} />
          <Text b size='$2xl' color='#224722'>
            MyPlant
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content>
        <NotificationModal />
        <Container display='flex' direction='row' css={{ padding: 0 }}>
          <Row gap={1} css={{ width: '100%' }}>
            <Avatar text={name[0]} />
            <Col css={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
              <Text size={12} b css={{ lineHeight: '16px' }}>
                {name}
              </Text>
              <Text size={12} css={{ lineHeight: '16px' }}>
                {isAdmin ? 'Admin' : 'User'}
              </Text>
            </Col>
            <Button auto color='error' onClick={() => handleLogout()}>
              <PowerIcon color='white' />
            </Button>
          </Row>
        </Container>
      </Navbar.Content>
    </Navbar>
  );
};

export default React.memo(UserNavbar);
