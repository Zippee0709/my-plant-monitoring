import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { Container, Row, Grid, Text } from '@nextui-org/react';

import UserNavbar from '../components/navbars/UserNavbar';
import Sidebar, { SidebarItems } from '../components/sidebars/Sidebar';
import PlantPreviewCard from '../components/cards/PlantPreviewCard';
import NotificationCard from '../components/cards/NotificationCard';
import WeatherCard from '../components/cards/WeatherCard';

import { NotificationIconEnum, NotificationTypeEnum } from '../enums/NotificationIconEnum';
import { PlantStatusEnum } from '../enums/PlantStatusEnum';
import { UserPosition } from '../types/user.types';

import styles from '../styles/pages/Dashboard.module.scss';
import AuthContext from '../contexts/auth.context';
import PlantContext from '../contexts/plant.context';
import { NotificationType } from '../types/notification.types';
import { RequestFailedResponseType } from '../types/clientApi.types';

const Dashboard = () => {
  const [position, setPosition] = useState<UserPosition>({ latitude: 48.86, longitude: 2.33 });
  const authContext = useContext(AuthContext);
  const plantContext = useContext(PlantContext);
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  const matchingNotificationTab = {
    [NotificationTypeEnum.WATERING]: NotificationIconEnum.WATER,
    [NotificationTypeEnum.NEW_PLANT]: NotificationIconEnum.NEW_PLANT,
  };

  const matchingNotificationStatusTab = {
    [NotificationTypeEnum.WATERING]: PlantStatusEnum.NEED_WATER,
    [NotificationTypeEnum.NEW_PLANT]: PlantStatusEnum.HEALTHY,
  };

  const requestNotificationPermission = async () => {
    const permission = await window.Notification.requestPermission();
    console.log('permission : ', permission);
    if (permission !== 'granted') {
      throw new Error('Permission not granted for Notification');
    }
    if (authContext) {
      authContext.setNotificationHandler(true);
    }
  };

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/service.js').then(
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

    const getNotif = async () => {
      const rep = await plantContext?.GetNotifications();
      if ((rep as RequestFailedResponseType).error) {
        console.log('error');
        return;
      }
      setNotifications(rep as NotificationType[]);
      return;
    };

    getNotif();

    const getPlants = async () => {
      if (!plantContext) return;
      const rep = await plantContext.GetPlants();
      if ((rep as RequestFailedResponseType).error) {
        console.error('Error: when fetching plants');
        return;
      }
    };
    getPlants();
  }, []);

  if (!plantContext) return <div>loading</div>;

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
              {/* <Button auto icon={<AddIcon color='#FFFFFF' width={16} height={16} />} color='success' /> */}
            </Container>
            <Grid.Container gap={2} justify='flex-start'>
              {/* TODO : call to recent plant and not all plant */}
              {plantContext?.plants.length > 0 &&
                plantContext?.plants.map((plant) => (
                  <Grid xs={6} sm={3} key={plant.id}>
                    <PlantPreviewCard name={plant.name} isEnable={plant.isEnable} />
                  </Grid>
                ))}
            </Grid.Container>
          </div>
          <div className={styles.dashboard__main__information}>
            <div className={styles.dashboard__main__information__task}>
              <Container fluid display='flex' direction='column' css={{ p: '$sm' }}>
                <Text b size='$2xl' color='#224722'>
                  Notifications
                </Text>
                <div className={styles.dashboard__main__information__task__container}>
                  {notifications?.map((notification) => (
                    <NotificationCard
                      key={notification.id}
                      name='Rose'
                      iconName={matchingNotificationTab[notification.type] ?? NotificationIconEnum.LIGHT}
                      status={matchingNotificationStatusTab[notification.type] ?? PlantStatusEnum.HEALTHY}
                    />
                  ))}
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
