import React, { useContext, useState } from 'react';
import WeatherContext from '../store/weather-context';
import classes from './Search.module.css';

const Search = () => {
  const weatherCtx = useContext(WeatherContext);
  const [input, setInput] = useState('');

  const searchHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    weatherCtx.searchLocation(input);
    setInput('');
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={classes.searchForm}>
        <input
          onChange={searchHandler}
          className={classes.searchInput}
          type="text"
          value={input}
          style={{ textAlign: 'center' }}
          placeholder="Search City or Zip Code..."
        />
      </form>
    </div>
  );
};

export default Search;
