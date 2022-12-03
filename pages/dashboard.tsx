import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container, Row, Grid, Text, Button } from '@nextui-org/react';

import UserNavbar from '../components/navbars/UserNavbar';
import Sidebar, { SidebarItems } from '../components/sidebars/Sidebar';
import PlantPreviewCard from '../components/cards/PlantPreviewCard';
import NotificationCard from '../components/cards/NotificationCard';
import WeatherCard from '../components/cards/WeatherCard';

import AddIcon from '../components/icons/AddIcon';

import { NotificationIconEnum } from '../enums/NotificationIconEnum';
import { PlantStatusEnum } from '../enums/PlantStatusEnum';
import { UserPosition } from '../types/user.types';

import styles from '../styles/pages/Dashboard.module.scss';

const requestNotificationPermission = async () => {
  const permission = await window.Notification.requestPermission();
  console.log(permission);
  if (permission !== 'granted') {
    throw new Error('Permission not granted for Notification');
  }
};

const Dashboard = () => {
  const [position, setPosition] = useState<UserPosition>({ latitude: 48.86, longitude: 2.33 });

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(
          async function (registration) {
            console.log('Service Worker registration successful with scope: ', registration);
            await requestNotificationPermission();
          },
          function (err) {
            console.log('Service Worker registration failed: ', err);
          }
        );

        navigator.geolocation.getCurrentPosition(function (position) {
          setPosition({ latitude: position.coords.latitude, longitude: position.coords.longitude });
        });
      });
    }
  }, []);

  return (
    <Container display='flex' direction='column' fluid css={{ minHeight: '100vh', minWidth: '100%', p: 0, m: 0 }}>
      <UserNavbar />
      <Row>
        <Sidebar selected={SidebarItems.dashboard} />
        <main className={styles.dashboard__main}>
          <div className={styles.dashboard__main__recent}>
            <Container fluid display='flex' justify='space-between' css={{ p: '$sm' }}>
              <Text b size='$2xl' color='#224722'>
                Recent plants
              </Text>
              <Button auto icon={<AddIcon color='#FFFFFF' width={16} height={16} />} color='success' />
            </Container>
            <Grid.Container gap={2} justify='flex-start'>
              <Grid xs={6} sm={3}>
                <PlantPreviewCard />
              </Grid>
              <Grid xs={6} sm={3}>
                <PlantPreviewCard />
              </Grid>
              <Grid xs={6} sm={3}>
                <PlantPreviewCard />
              </Grid>
              <Grid xs={6} sm={3}>
                <PlantPreviewCard />
              </Grid>
            </Grid.Container>
          </div>
          <div className={styles.dashboard__main__information}>
            <div className={styles.dashboard__main__information__task}>
              <Container fluid display='flex' direction='column' css={{ p: '$sm' }}>
                <Text b size='$2xl' color='#224722'>
                  Notifications
                </Text>
                <div className={styles.dashboard__main__information__task__container}>
                  <NotificationCard
                    name='Rose'
                    iconName={NotificationIconEnum.WATER}
                    status={PlantStatusEnum.NEED_WATER}
                  />
                  <NotificationCard
                    name='Rose'
                    iconName={NotificationIconEnum.LIGHT}
                    status={PlantStatusEnum.NEED_LIGHT}
                  />
                  <NotificationCard
                    name='Rose'
                    iconName={NotificationIconEnum.TEMPERATURE}
                    status={PlantStatusEnum.TOO_HOT}
                  />
                  <NotificationCard
                    name='Rose'
                    iconName={NotificationIconEnum.TEMPERATURE}
                    status={PlantStatusEnum.TOO_COLD}
                  />
                </div>
                <Link href='#' className={styles.dashboard__main__information__link}>
                  See more
                </Link>
              </Container>
            </div>
            <div className={styles.dashboard__main__information__weather}>
              <Text b size='$2xl' color='#224722'>
                Weather
              </Text>
              <WeatherCard position={position} />
            </div>
          </div>
        </main>
      </Row>
    </Container>
  );
};

export default Dashboard;
