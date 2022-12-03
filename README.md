# My Plant Monitoring

This project was created for the Epitech PWA module<br>
This project uses [**NextUi**](https://nextui.org/) as React UI library<br>

## How to run locally

To launch this project locally, you have to:<br>

- Copy and rename the `.env.example` to `.env`<br>
  Repo back [**here**](https://gitlab.com/Cerfio/m-rea-901-back)

```sh
cp .env.example .env
```

- Create an account on [**OpenWeather**](https://openweathermap.org/)
- Create an api key : https://home.openweathermap.org/api_keys
- Copy this api key in the `.env`

```sh
NEXT_PUBLIC_OPEN_WEATHER_KEY=<your-api-key>
```

## Available Scripts

In the project directory, you can run:

### `yarn run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## Deployment

The deployment is done automatically on [**Netlify**](https://www.netlify.com/) when someone merge something on `main`.
