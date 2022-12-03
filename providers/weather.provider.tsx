import React, { useMemo, useState } from 'react';
import WeatherContext from '../contexts/weather.context';
import { RequestFailedResponseType } from '../types/clientApi.types';
import { UserPosition } from '../types/user.types';
import { CurrentWeatherType } from '../types/weather.types';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const WeatherProvider = ({ children }: Props) => {
  const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY;

  const [weather, setWeather] = useState<CurrentWeatherType | null>(null);

  const getWeather = async (position: UserPosition): Promise<CurrentWeatherType | RequestFailedResponseType> => {
    try {
      const rep = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&units=metric&appid=${API_KEY}`
      );
      const data: CurrentWeatherType = await rep.json();
      setWeather(data);
      return data;
    } catch (error) {
      return {
        statusCode: 500,
        error: 'Internal Server Error',
        message: 'Cannot fetch weather data',
      };
    }
  };

  const value = useMemo(() => ({ weather, getWeather }), [weather]);

  return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>;
};

export default WeatherProvider;
