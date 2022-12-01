import React from 'react';
import Link from 'next/link';
import { Navbar, Text } from '@nextui-org/react';

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
        <Link id='signin' href='/auth/signin' className={styles.login}>
          Login
        </Link>
        <Link href='/auth/signup' className={styles.register}>
          Register
        </Link>
      </Navbar.Content>
    </Navbar>
  );
};

export default React.memo(MyNavbar);
