import React from 'react';
import Image from 'next/image';
import { Card, Grid, Text, Row, Col } from '@nextui-org/react';

import WindIcon from '../icons/WindIcon';
import TemperatureIcon from '../icons/TemperatureIcon';
import WaterIcon from '../icons/WaterIcon';

import SunnyIcon from '../../assets/weather-icons/sunny.svg';

const WeatherCard = () => {
  return (
    <Card css={{ mt: '$xs', height: '370px', background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364);' }}>
      <Card.Header css={{ justifyContent: 'space-between' }}>
        <Text b color='white' size='$xl'>
          Monday
        </Text>
        <Text b color='white' size='$sm'>
          11:09 - 10/02
        </Text>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ py: '$10' }}>
        <Row>
          <Col>
            <Text b color='white' size='$5xl'>
              22°C
            </Text>
            <Row>
              <Text b color='gray'>
                Real feel
              </Text>
              &nbsp;
              <Text b color='white'>
                22°C
              </Text>
            </Row>
          </Col>
          <Image src={SunnyIcon} alt='Sunny' width={110} height={110} />
        </Row>
      </Card.Body>
      <Card.Footer>
        <Grid.Container gap={1}>
          <Grid xs={4}>
            <Card variant='bordered' css={{ height: '120px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              <Card.Body css={{ justifyContent: 'center' }}>
                <TemperatureIcon color='#B9AA70' />
                <Text color='#B9AA70' size='$sm'>
                  Wind
                </Text>
                <Text b color='#B9AA70' size='$sm'>
                  5 - 8 km/h
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card css={{ height: '120px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              <Card.Body css={{ justifyContent: 'center' }}>
                <WindIcon color='#AC898B' />
                <Text color='#AC898B' size='$sm'>
                  Pressure
                </Text>
                <Text b color='#AC898B' size='$sm'>
                  5 - 8 km/h
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card variant='bordered' css={{ height: '120px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              <Card.Body css={{ justifyContent: 'center' }}>
                <WaterIcon color='#4375AB' />
                <Text color='#4375AB' size='$sm'>
                  Humidity
                </Text>
                <Text b color='#4375AB' size='$sm'>
                  5 - 8 km/h
                </Text>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </Card.Footer>
    </Card>
  );
};

export default React.memo(WeatherCard);
