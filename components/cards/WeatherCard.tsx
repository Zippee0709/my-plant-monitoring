import React, { useContext, useEffect } from 'react';
// import Image from 'next/image';
import { Card, Grid, Text, Row, Col, Loading, Image } from '@nextui-org/react';
import moment from 'moment';

import WeatherContext from '../../contexts/weather.context';

import WindIcon from '../icons/WindIcon';
import TemperatureIcon from '../icons/TemperatureIcon';
import WaterIcon from '../icons/WaterIcon';
import SunnyIcon from '../../assets/weather-icons/sunny.svg';

import { UserPosition } from '../../types/user.types';
import { RequestFailedResponseType } from '../../types/clientApi.types';

interface WeatherCardProps {
  position: UserPosition;
}

const WeatherCard = ({ position }: WeatherCardProps) => {
  const weatherContext = useContext(WeatherContext);

  useEffect(() => {
    const getWeather = async () => {
      if (!weatherContext) return;
      const rep = await weatherContext.getWeather(position);
      console.log('weatherContext.weather', weatherContext.weather);
      if ((rep as RequestFailedResponseType).error) {
        // TODO : repair this -> need to add <ToastContainer /> in _app.tsx,
        // TODO : but it's broken when the toast appear
        // toast.error('Error - login', {
        //   position: 'top-right',
        //   autoClose: 2500,
        // });
        return;
      }
    };
    getWeather();
  }, [position]);

  if (!weatherContext) {
    return null;
  }

  return (
    <Card css={{ mt: '$xs', height: '344px', background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364);' }}>
      {weatherContext.weather === null ? (
        <Card.Body css={{ justifyContent: 'center' }}>
          <Loading type='points-opacity' size='xl' />
        </Card.Body>
      ) : (
        <>
          <Card.Header css={{ justifyContent: 'space-between' }}>
            <Text b color='white' size='$xl'>
              {weatherContext.weather.name}
            </Text>
            <Text b color='white' size='$sm'>
              {moment(weatherContext.weather.dt).format('DD-MM : HH:mm')}
            </Text>
          </Card.Header>
          <Card.Body>
            <Row align='center'>
              <Col>
                <Text b color='white' size='$4xl'>
                  {weatherContext.weather.main.temp}°C
                </Text>
                <Row>
                  <Text b size='$sm' color='gray'>
                    Real feel
                  </Text>
                  &nbsp;
                  <Text b size='$sm' color='white'>
                    {weatherContext.weather.main.feels_like}°C
                  </Text>
                </Row>
              </Col>
              <Image
                src={`https://openweathermap.org/img/wn/${weatherContext.weather.weather[0].icon}@2x.png`}
                alt={`${weatherContext.weather.weather[0].id}--icon`}
                width={80}
                height={80}
              />
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
                      {weatherContext.weather.wind.speed} km/h
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
                      {weatherContext.weather.main.pressure} hPa
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
                      {weatherContext.weather.main.humidity} %
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>
            </Grid.Container>
          </Card.Footer>
        </>
      )}
    </Card>
  );
};

export default WeatherCard;
