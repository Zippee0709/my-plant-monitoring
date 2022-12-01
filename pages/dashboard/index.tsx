import React from 'react';
import SidePanel from '../../components/sidepanel/SidePanel';
import styles from '../../styles/pages/Dashboard.module.scss';
import { PlantType } from '../../types/plants.types';

const Dashboard = () => {
  const recentPlants: PlantType[] = [
    {
      id: '1',
      name: 'Plant 1',
      age: '1 year',
      pic: 'https://picsum.photos/200',
    },
    {
      id: '2',
      name: 'Plant 2',
      age: '2 years',
      pic: 'https://picsum.photos/200',
    },
    {
      id: '3',
      name: 'Plant 3',
      age: '3 years',
      pic: 'https://picsum.photos/200',
    },
  ];

  const allPlants: PlantType[] = [
    {
      id: '4',
      name: 'Plant 4',
      age: '4 years',
      pic: 'https://picsum.photos/200',
    },
    {
      id: '5',
      name: 'Plant 5',
      age: '5 years',
      pic: 'https://picsum.photos/200',
    },
    {
      id: '6',
      name: 'Plant 6',
      age: '6 years',
      pic: 'https://picsum.photos/200',
    },
  ];

  return (
    <div className={styles.dashboard}>
      <SidePanel allPlants={allPlants} recentPlants={recentPlants} />
    </div>
  );
};

export default Dashboard;
