import Head from 'next/head';
import { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.scss';
import AuthProvider from '../providers/auth.provider';
import WeatherProvider from '../providers/weather.provider';
import PlantProvider from '../providers/plant.provider';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Head>
        <base href='/' />
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
        />
        <meta name='description' content='Description' />
        <meta name='keywords' content='Keywords' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/icons/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />
        <title>MyPlant</title>
        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/icon-192x192.png' />
        <link rel='apple-touch-icon' href='/icons/apple-icon.png' />
        <link rel='apple-touch-icon' sizes='57x57' href='/icons/apple-icon-57x57.png' />
        <link rel='apple-touch-icon' sizes='60x60' href='/icons/apple-icon-60x60.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='/icons/apple-icon-72x72.png' />
        <link rel='apple-touch-icon' sizes='76x76' href='/icons/apple-icon-76x76.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='/icons/apple-icon-114x114.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='/icons/apple-icon-120x120.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='/icons/apple-icon-144x144.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/icons/apple-icon-152x152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-icon-180x180.png' />
      </Head>
      <AuthProvider>
        <WeatherProvider>
          <PlantProvider>
            <Component {...pageProps} />
          </PlantProvider>
        </WeatherProvider>
      </AuthProvider>
    </NextUIProvider>
  );
}
