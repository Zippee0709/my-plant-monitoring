import { createContext } from 'react';
import { CurrentWeatherType } from '../types/weather.types';
import { RequestFailedResponseType } from '../types/clientApi.types';
import { UserPosition } from '../types/user.types';

interface WeatherContextData {
  weather: CurrentWeatherType | null;
  getWeather(position: UserPosition): Promise<CurrentWeatherType | RequestFailedResponseType>;
}

const WeatherContext = createContext<WeatherContextData | null>(null);

export default WeatherContext;
