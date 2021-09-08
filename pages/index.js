import Head from 'next/head';
import Card from '../components/Card/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import Layout from '../components/Layout/Layout';
import { useContext } from 'react';
import WeatherContext from '../components/store/weather-context';

const HomePage = () => {
  const weatherCtx = useContext(WeatherContext);

  return (
    <>
      <Layout>
        <Head>
          <title>Weather App</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        {weatherCtx.isLoading && !weatherCtx.error && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress color="primary"></CircularProgress>
          </div>
        )}
        {weatherCtx.error && (
          <Box style={{ marginTop: 50 }} display="flex" justifyContent="center">
            <Alert severity="error">Wrong format!</Alert>
          </Box>
        )}
        {!weatherCtx.isLoading && (
          <Card
            weather={weatherCtx.weather}
            unit={weatherCtx.unit}
            city={weatherCtx.city}
          ></Card>
        )}
      </Layout>
    </>
  );
};

export default HomePage;
