import { createContext, useState, useEffect } from 'react';

const WeatherContext = createContext({
  searchLocation: (input) => {},
  btnHandler: (input) => {},
  weather: '',
  isLoading: true,
});

export function WeatherContextProvider(props) {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [unit, setUnit] = useState('metric');
  const [searchInput, setSearchInput] = useState('');
  

  const btnHandler = () => {
    if (unit === 'metric') {
      setUnit('imperial');
    } else {
      setUnit('metric');
    }
  };

  const searchLocation = async (input = searchInput, units = unit) => {
    if (loading) {
      input = 'London';
    }
    try {
      const firstResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=${units}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
      );
      
      const firstData = await firstResponse.json();
      if (!firstResponse.ok) {
        setError(true);
        throw new Error('Something went wrong');
      }

      let lon = firstData.coord.lon;
      let lat = firstData.coord.lat;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
      );
      const data = await response.json();

      if (!response.ok) {
        setError(true);
        throw new Error('Something went wrong');
      }
      setWeather(data);
      setCity(firstData.name + ', ' + firstData.sys.country);
      setSearchInput(firstData.name);
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    searchLocation();
  }, [unit, searchInput]);

  const context = {
    searchLocation: searchLocation,
    city: city,
    weather: weather,
    isLoading: loading,
    error: error,
    btnHandler: btnHandler,
    unit: unit,
    searchInput: searchInput,
  };

  return (
    <WeatherContext.Provider value={context}>
      {props.children}
    </WeatherContext.Provider>
  );
}

export default WeatherContext;