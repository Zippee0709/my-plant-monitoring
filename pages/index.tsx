import React from 'react';

import Navbar from '../components/navbars/Navbar';
import styles from '../styles/pages/Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
    </div>
  );
};

export default Home;
