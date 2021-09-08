import { WeatherContextProvider } from '../components/store/weather-context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <WeatherContextProvider>
      <Component {...pageProps} />
    </WeatherContextProvider>
  );
}

export default MyApp;
