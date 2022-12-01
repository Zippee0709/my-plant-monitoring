import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Navbar, Text, Avatar } from '@nextui-org/react';

import PlantIcon from '../icons/PlantIcon';
import BellIcon from '../icons/BellIcon';
import styles from './Navbar.module.scss';

const UserNavbar = () => {
  return (
    <Navbar variant='static' maxWidth='fluid' css={{ justifyContent: 'space-between' }}>
      <Navbar.Brand>
        <Link href='/' className={styles['brand-link']}>
          <PlantIcon color='#224722' width={40} height={40} />
          <Text b size='$2xl' color='#224722'>
            MyPlant
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content>
        <Link href='/auth/signin' className={styles.login}>
          <BellIcon />
        </Link>
        <Container display='flex' direction='row' css={{ padding: 0 }}>
          <Row gap={1}>
            <Avatar text='ZW' />
            <Col css={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
              <Text size={12} b css={{ lineHeight: '16px' }}>
                Zhiwen Wang
              </Text>
              <Text size={12} css={{ lineHeight: '16px' }}>
                User
              </Text>
            </Col>
          </Row>
        </Container>
      </Navbar.Content>
    </Navbar>
  );
};

export default React.memo(UserNavbar);
