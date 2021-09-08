import React from 'react';
import classes from './Card.module.css';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image';

const Card = ({ weather, city, unit }) => {
  if (unit === 'metric') {
    unit = '°C';
  } else {
    unit = '°F';
  }
  return (
    <>
      <div className={classes.container}>
        <Grid
          container
          item
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <div className={classes.card}>
            <div className={classes.infoCard}>
              <div className={classes.infoSection}>
                <div className={classes.leftData}>
                  <strong>{weather.daily[0].temp.day.toFixed(0) + unit}</strong>
                  <div className={classes.city}>{city}</div>
                </div>
                <div className={classes.rightData}>
                  <Image
                    width={100}
                    height={100}
                    src={`http://openweathermap.org/img/wn/${weather.daily[0].weather[0].icon}@2x.png`}
                    alt="Weather Icon"
                  ></Image>
                  <strong>{weather.daily[0].weather[0].description}</strong>
                </div>
              </div>
              <div className={classes.otherInfo}>
                Feels like: &nbsp;
                <strong>
                  {weather.daily[0].feels_like.day.toFixed(0) + unit}
                </strong>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Humidity: &nbsp;
                <strong>{weather.daily[0].humidity}%</strong>
              </div>
            </div>
            <div></div>
            <div className={classes.hoursCard}>
              <div>
                <strong>{weather.hourly[3].temp.toFixed(0) + unit}</strong>
                <br />
                <Image
                  width={100}
                  height={100}
                  src={`http://openweathermap.org/img/wn/${weather.hourly[3].weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                ></Image>
                <br />
                <strong>12:00</strong>
                <p>PM</p>
              </div>{' '}
              <div>
                <strong>{weather.hourly[4].temp.toFixed(0) + unit}</strong>
                <br />
                <Image
                  width={100}
                  height={100}
                  src={`http://openweathermap.org/img/wn/${weather.hourly[4].weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                ></Image>
                <br />
                <strong>1:00</strong>
                <p>PM</p>
              </div>
              <div>
                <strong>{weather.hourly[5].temp.toFixed(0) + unit}</strong>
                <br />
                <Image
                  width={100}
                  height={100}
                  src={`http://openweathermap.org/img/wn/${weather.hourly[5].weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                ></Image>
                <br />
                <strong>2:00</strong>
                <p>PM</p>
              </div>{' '}
              <div>
                <strong>{weather.hourly[6].temp.toFixed(0) + unit}</strong>
                <br />
                <Image
                  width={100}
                  height={100}
                  src={`http://openweathermap.org/img/wn/${weather.hourly[6].weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                ></Image>
                <br />
                <strong>3:00</strong>
                <p>PM</p>
              </div>
              <div>
                <strong>{weather.hourly[7].temp.toFixed(0) + unit}</strong>
                <br />
                <Image
                  width={100}
                  height={100}
                  src={`http://openweathermap.org/img/wn/${weather.hourly[7].weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                ></Image>
                <br />
                <strong>4:00</strong>
                <p>PM</p>
              </div>
              <div>
                <strong>{weather.hourly[7].temp.toFixed(0) + unit}</strong>
                <br />
                <Image
                  width={100}
                  height={100}
                  src={`http://openweathermap.org/img/wn/${weather.hourly[7].weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                ></Image>
                <br />
                <strong>5:00</strong>
                <p>PM</p>
              </div>
            </div>

            <div className={classes.daysCard}>
              <div>
                <strong>{weather.daily[0].temp.day.toFixed(0) + unit}</strong>
                <br />
                <Image
                  width={100}
                  height={100}
                  src={`http://openweathermap.org/img/wn/${weather.daily[0].weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                ></Image>
                <br />
                <strong>Monday</strong>
              </div>{' '}
              <div>
                <strong>{weather.daily[1].temp.day.toFixed(0) + unit}</strong>
                <br />
                <Image
                  width={100}
                  height={100}
                  src={`http://openweathermap.org/img/wn/${weather.daily[1].weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                ></Image>
                <br />
                <strong>Tuesday</strong>
              </div>{' '}
              <div>
                <strong>{weather.daily[2].temp.day.toFixed(0) + unit}</strong>
                <br />
                <Image
                  width={100}
                  height={100}
                  src={`http://openweathermap.org/img/wn/${weather.daily[2].weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                ></Image>
                <br />
                <strong>Wednesday</strong>
              </div>{' '}
              <div>
                <strong>{weather.daily[3].temp.day.toFixed(0) + unit}</strong>
                <br />
                <Image
                  width={100}
                  height={100}
                  src={`http://openweathermap.org/img/wn/${weather.daily[3].weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                ></Image>
                <br />
                <strong>Thursday</strong>
              </div>{' '}
              <div>
                <strong>{weather.daily[4].temp.day.toFixed(0) + unit}</strong>
                <br />
                <Image
                  width={100}
                  height={100}
                  src={`http://openweathermap.org/img/wn/${weather.daily[4].weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                ></Image>
                <br />
                <strong>Friday</strong>
              </div>{' '}
              <div>
                <strong>{weather.daily[5].temp.day.toFixed(0) + unit}</strong>
                <br />
                <Image
                  width={100}
                  height={100}
                  src={`http://openweathermap.org/img/wn/${weather.daily[5].weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                ></Image>
                <br />
                <strong>Saturday</strong>
              </div>{' '}
              <div>
                <strong>{weather.daily[6].temp.day.toFixed(0) + unit}</strong>
                <br />
                <Image
                  width={100}
                  height={100}
                  src={`http://openweathermap.org/img/wn/${weather.daily[6].weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                ></Image>
                <br />
                <strong>Sunday</strong>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </>
  );
};

export default Card;
