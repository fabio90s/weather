import classes from './Layout.module.css';
import Search from '../Search/Search';
import { useContext } from 'react';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import WeatherContext from '../../store/weather-context';

const Layout = (props) => {
  const weatherCtx = useContext(WeatherContext);

  if (weatherCtx.unit === 'metric') {
    weatherCtx.unit = '°C';
  } else if (weatherCtx.unit === 'imperial') {
    weatherCtx.unit = '°F';
  }

  return (
    <>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <div className={classes.logo}>Weather</div>
          <div className={classes.search}>
            <Search></Search>
          </div>
          <div>
            <button onClick={weatherCtx.btnHandler} className={classes.btn}>
              {weatherCtx.unit} <ImportExportIcon></ImportExportIcon>
            </button>
          </div>
        </nav>
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;