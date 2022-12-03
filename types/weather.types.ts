//
// Weather types
// ===== ===== ===== ===== =====

export interface CurrentWeatherType {
  coord: CoordType;
  weather: WeatherType[];
  base: string;
  main: MainType;
  visibility: number;
  wind: WindType;
  rain: RainType;
  clouds: CloudsType;
  dt: number;
  sys: SysType;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface CloudsType {
  all: number;
}

export interface CoordType {
  lon: number;
  lat: number;
}

export interface MainType {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface RainType {
  '1h': number;
}

export interface SysType {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherType {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WindType {
  speed: number;
  deg: number;
  gust: number;
}
