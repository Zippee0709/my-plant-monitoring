import React from 'react';
import Image from 'next/image';
import { Navbar, Button, Text, Spacer, Input, Avatar } from '@nextui-org/react';

import FoxLogo from '../../assets/logos/fox-logo.svg';
import SearchIcon from '../../assets/icons/search.svg';
import UserIcon from '../../assets/icons/user.svg';

const MyNavbar = () => {
  return (
    <Navbar variant='static'>
      <Navbar.Brand>
        <Image src={FoxLogo} alt='logo' width={40} height={40} />
        <Spacer />
        <Text b color='inherit' hideIn='xs'>
          Fox Anime
        </Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item>
          <Input
            width='400px'
            contentLeft={<Image src={SearchIcon} alt='search-icon' width={20} height={20} />}
            placeholder='Search you anime ...'
          />
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <Button auto color='success' icon={<Image src={UserIcon} alt='user-icon' width={20} height={20} />} />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default React.memo(MyNavbar);
