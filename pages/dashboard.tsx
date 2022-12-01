import React from 'react';
import { Container, Row, Grid, Text, Button } from '@nextui-org/react';

import UserNavbar from '../components/navbars/UserNavbar';
import Sidebar, { SidebarItems } from '../components/sidebars/Sidebar';
import PlantPreviewCard from '../components/cards/PlantPreviewCard';

import AddIcon from '../components/icons/AddIcon';

import styles from '../styles/pages/Dashboard.module.scss';
import SidePanel from '../components/sidepanel/SidePanel';
import { PlantType } from '../types/plants.types';

const Dashboard = () => {
  const recentPlants: PlantType[] = [
    {
      id: '1',
      name: 'Plant 1',
      age: '1 year',
      pic: 'https://picsum.photos/200',
      isSelected: true,
    },
    {
      id: '2',
      name: 'Plant 2',
      age: '2 years',
      pic: 'https://picsum.photos/200',
      isSelected: false,
    },
    {
      id: '3',
      name: 'Plant 3',
      age: '3 years',
      pic: 'https://picsum.photos/200',
      isSelected: false,
    },
  ];

  const allPlants: PlantType[] = [
    {
      id: '4',
      name: 'Plant 4',
      age: '4 years',
      pic: 'https://picsum.photos/200',
      isSelected: false,
    },
    {
      id: '5',
      name: 'Plant 5',
      age: '5 years',
      pic: 'https://picsum.photos/200',
      isSelected: false,
    },
    {
      id: '6',
      name: 'Plant 6',
      age: '6 years',
      pic: 'https://picsum.photos/200',
      isSelected: false,
    },
  ];

  return (
    <Container display='flex' direction='column' fluid css={{ minHeight: '100vh', padding: 0 }}>
      <UserNavbar />
      <Row>
        <Sidebar selected={SidebarItems.dashboard} />
        <SidePanel allPlants={allPlants} recentPlants={recentPlants} />
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
            <div className={styles.dashboard__main__information__task}></div>
            <div className={styles.dashboard__main__information__weather}></div>
          </div>
        </main>
      </Row>
    </Container>
  );
};

export default Dashboard;
