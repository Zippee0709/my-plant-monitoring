import React from 'react';
import Link from 'next/link';
import { Navbar, Button, Text } from '@nextui-org/react';

import PlantIcon from '../icons/PlantIcon';
import styles from './Navbar.module.scss';

const MyNavbar = () => {
  return (
    <Navbar variant='static' disableShadow css={{ backgroundColor: '#e7edde', $$navbarBlurBackgroundColor: '#e7edde' }}>
      <Navbar.Brand>
        <Link href='/' className={styles['brand-link']}>
          <PlantIcon color='#224722' width={40} height={40} />
          <Text b size='$2xl' color='#224722'>
            MyPlant
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item>
          <Link href='/auth/signin' className={styles.login}>
            Login
          </Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link href='/auth/signup' className={styles.register}>
            Register
          </Link>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default React.memo(MyNavbar);
