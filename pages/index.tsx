import React from 'react';
import { Container, Image, Text, Button } from '@nextui-org/react';

import MyNavbar from '../components/navbars/Navbar';
import MyFooter from '../components/footers/Footer';
import styles from '../styles/pages/Home.module.scss';

const Home = () => {
  return (
    <Container display='flex' direction='column' css={{ minHeight: '100vh', width: '100%', padding: 0 }}>
      <MyNavbar />
      <main className={styles.home__main}>
        <section className={styles.home__main__introduction}>
          <Text b size='$5xl' color='#224722'>
            Discover MyPlant app
          </Text>
          <Text size='$2xl' color='#224722'>
            🌱 The best app to monitoring your plants 🌱
          </Text>
        </section>
        <section className={styles.home__main__reminder}>
          <div className={styles.home__main__reminder__image}>
            <Image
              src='/images/feature-0.svg'
              alt='hand-watering-plant-image'
              width={500}
              height={500}
              objectFit='contain'
              object-position='center'
            />
          </div>
          <div className={styles.home__main__reminder__description}>
            <Text size='$xl' color='#224722'>
              Unique care schedules
            </Text>
            <Text b size='60px' color='#224722' css={{ lineHeight: '60px' }}>
              Smart care reminders
            </Text>
            <Text size='$xl' color='#224722'>
              Are you not sure when it's time to water your plants? Planta knows when! Just add them to the app and get
              notified when it's time to water, fertilize, mist, clean (yes, it's a thing) and repot!
            </Text>
            <Button color='success' size='xl' rounded>
              Download Now
            </Button>
          </div>
        </section>
        <section className={styles.home__main__identification}>
          <div className={styles.home__main__identification__description}>
            <Text size='$xl' color='#224722'>
              Scan your plant
            </Text>
            <Text b size='60px' color='#224722' css={{ lineHeight: '60px' }}>
              Plant identification
            </Text>
            <Text size='$xl' color='#224722'>
              Maybe you are not sure which plant you have? You can just take a picture of it and we will instantly let
              you know. With Plantas plant scanner you can scan all your house plants to find out the plants name and
              how to care for them.
            </Text>
            <Button color='success' size='xl' rounded>
              Download Now
            </Button>
          </div>
          <div className={styles.home__main__identification__image}>
            <Image
              src='/images/feature-1.svg'
              alt='hand-watering-plant-image'
              width={500}
              height={500}
              objectFit='contain'
              object-position='center'
            />
          </div>
        </section>
        <section className={styles.home__main__notification}>
          <div className={styles.home__main__notification__image}>
            <Image
              src='/images/feature-2.svg'
              alt='hand-watering-plant-image'
              width={500}
              height={500}
              objectFit='contain'
              object-position='center'
            />
          </div>
          <div className={styles.home__main__notification__description}>
            <Text size='$xl' color='#224722'>
              Notifications push
            </Text>
            <Text b size='60px' color='#224722' css={{ lineHeight: '60px' }}>
              In real time always
            </Text>
            <Text size='$xl' color='#224722'>
              Always keep an eye on your plants, you receive real time notifications on the platform that alerts you if
              your plants need it
            </Text>
            <Button color='success' size='xl' rounded>
              Download Now
            </Button>
          </div>
        </section>
        <section className={styles.home__main__doctor}>
          <div className={styles.home__main__doctor__description}>
            <Text size='$xl' color='#224722'>
              Plant doctor
            </Text>
            <Text b size='60px' color='#224722' css={{ lineHeight: '60px' }}>
              Dr. Plant
            </Text>
            <Text size='$xl' color='#224722'>
              Are your plants not feeling good? Dr. Planta can help you figure out what's wrong and set up a treatment
              plan.
            </Text>
            <Button color='success' size='xl' rounded>
              Download Now
            </Button>
          </div>
          <div className={styles.home__main__doctor__image}>
            <Image
              src='/images/feature-3.svg'
              alt='hand-watering-plant-image'
              width={500}
              height={500}
              objectFit='contain'
              object-position='center'
            />
          </div>
        </section>
      </main>
      <MyFooter />
    </Container>
  );
};

export default Home;
