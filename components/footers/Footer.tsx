import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Text, Spacer } from '@nextui-org/react';

import PlantIcon from '../icons/PlantIcon';
import AppStoreIcon from '../../assets/icons/app-store.svg';
import GooglePlayIcon from '../../assets/icons/google-play.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__header}>
        <div className={styles.footer__header__brand}>
          <PlantIcon color='#E0FFC0' width={40} height={40} />
          <Text b size='$2xl' color='#E0FFC0'>
            MyPlant
          </Text>
        </div>
        <div className={styles.footer__header__navigation}>
          <Text b color='#E0FFC0'>
            Navigation
          </Text>
          <Spacer />
          <Link href='/' className={styles.footer__header__subtitle}>
            About MyPlant
          </Link>
          <Spacer y={0.5} />
          <Link href='/' className={styles.footer__header__subtitle}>
            MyPlant for IOS
          </Link>
          <Spacer y={0.5} />
          <Link href='/' className={styles.footer__header__subtitle}>
            MyPlant for Android
          </Link>
          <Spacer y={0.5} />
          <Link href='/' className={styles.footer__header__subtitle}>
            Terms and conditions
          </Link>
          <Spacer y={0.5} />
          <Link href='/' className={styles.footer__header__subtitle}>
            Privacy policy
          </Link>
        </div>
        <Spacer x={3} />
        <div className={styles.footer__header__contact}>
          <Text b color='#E0FFC0'>
            Contact
          </Text>
          <Spacer />
          <Link href='/' className={styles.footer__header__subtitle}>
            Help center
          </Link>
          <Spacer y={0.5} />
          <Link href='/' className={styles.footer__header__subtitle}>
            Support
          </Link>
          <Spacer y={0.5} />
          <Link href='/' className={styles.footer__header__subtitle}>
            Send E-mail
          </Link>
        </div>
        <Spacer x={3} />
        <div className={styles.footer__header__social}>
          <Text b color='#E0FFC0'>
            Follow us
          </Text>
          <Spacer />
          <Link href='/' className={styles.footer__header__subtitle}>
            Instagram
          </Link>
          <Spacer y={0.5} />
          <Link href='/' className={styles.footer__header__subtitle}>
            Facebook
          </Link>
          <Spacer y={0.5} />
          <Link href='/' className={styles.footer__header__subtitle}>
            Twitter
          </Link>
        </div>
      </div>
      <Spacer y={3} />
      <div className={styles.footer__body}>
        <div className={styles.footer__body__download}>
          <Link href='/'>
            <Image src={AppStoreIcon} alt='app-store-icon' />
          </Link>
          <Link href='/'>
            <Image src={GooglePlayIcon} alt='google-store-icon' />
          </Link>
        </div>
        <div className={styles.footer__body__brand}>
          <Text b color='#E0FFC0'>
            © 2022 MyPlant. All rights reserved
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
