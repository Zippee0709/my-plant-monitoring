import React from 'react';
import { Container, Row, Grid, Text, Button } from '@nextui-org/react';

import UserNavbar from '../components/navbars/UserNavbar';
import Sidebar, { SidebarItems } from '../components/sidebars/Sidebar';
import PlantPreviewCard from '../components/cards/PlantPreviewCard';

import AddIcon from '../components/icons/AddIcon';

import styles from '../styles/pages/Dashboard.module.scss';

const Dashboard = () => {
  return (
    <Container display='flex' direction='column' fluid css={{ minHeight: '100vh', padding: 0 }}>
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
            <div className={styles.dashboard__main__information__task}></div>
            <div className={styles.dashboard__main__information__weather}></div>
          </div>
        </main>
      </Row>
    </Container>
  );
};

export default Dashboard;
