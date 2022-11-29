import React from 'react';
import Link from 'next/link';
import { Navbar, Button, Text } from '@nextui-org/react';

import PlantIcon from '../icons/PlantIcon';
import UserIcon from '../icons/UserIcon';

const MyNavbar = () => {
  return (
    <Navbar variant='static' disableShadow css={{ backgroundColor: '#e7edde', $$navbarBlurBackgroundColor: '#e7edde' }}>
      <Navbar.Brand>
        <PlantIcon color='#224722' width={40} height={40} />
      </Navbar.Brand>
      <Navbar.Content>
        <Link href='/'>
          <Text b size='$2xl' color='#224722'>
            MyPlant
          </Text>
        </Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <Button
            auto
            aria-label='user-icon-button'
            icon={<UserIcon color='#224722' />}
            css={{ backgroundColor: 'transparent' }}
          />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default React.memo(MyNavbar);
