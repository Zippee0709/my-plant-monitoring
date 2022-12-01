import React from 'react';
import { Card, Container, Link, Spacer, Text, Image, Row, Col } from '@nextui-org/react';

import PlantIcon from '../icons/PlantIcon';
import { PlantType } from '../../types/plants.types';
import PlantInfoCard from '../plants/plantinfoCard';

interface Props {
  recentPlants: PlantType[];
  allPlants: PlantType[];
}

const SidePanel = ({ recentPlants, allPlants }: Props) => {
  return (
    <div>
      <Container
        css={{
          background: '#f4f6ec',
          maxWidth: '300px',
          height: '100vh',
          padding: '0',
          margin: '0',
        }}
      >
        <Link href='/dashboard' css={{ paddingTop: '10px', paddingBottom: '10px' }}>
          <Container display='flex' direction='row' alignItems='center' gap={2}>
            <PlantIcon color='#224722' width={40} height={40} />
            <Spacer x={1} />
            <Text b size='$2xl' color='#224722'>
              MyPlant
            </Text>
          </Container>
        </Link>
        <hr />
        <Container gap={2} css={{ paddingTop: '10px' }}>
          <Text h4 color='#224722'>
            Recent
          </Text>
          {recentPlants.map((plant, index) => (
            <Col>
              <PlantInfoCard key={plant.id} id={plant.id} pic={plant.pic} name={plant.name} age={plant.age} />
              {index !== recentPlants.length && <Spacer y={0.3} />}
            </Col>
          ))}
        </Container>
        <Container gap={2} css={{ paddingTop: '10px' }}>
          <Text h4 color='#224722'>
            All plants
          </Text>
          {allPlants.map((plant, index) => (
            <Col>
              <PlantInfoCard key={plant.id} id={plant.id} pic={plant.pic} name={plant.name} age={plant.age} />
              {index !== recentPlants.length && <Spacer y={0.3} />}
            </Col>
          ))}
        </Container>
      </Container>
    </div>
  );
};

export default React.memo(SidePanel);
