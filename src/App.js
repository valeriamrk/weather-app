import "./App.css";
import { MainPage } from "./components";
import React, { Component } from "react";
// import { API_KEY, TIMEZONE_KEY } from "./config/config";
import clear_sky_day from "./assets/images/clear_sky_day.jpeg";
import clear_sky_night from "./assets/images/clear_sky_night.jpeg";
import scattered_clouds_day from "./assets/images/scattered_clouds_day.jpeg";
import scattered_clouds_night from "./assets/images/scattered_clouds_night.jpeg";
import few_clouds_day from "./assets/images/few_clouds_day.jpeg";
import few_clouds_night from "./assets/images/few_clouds_night.jpeg";
import broken_clouds_day from "./assets/images/broken_clouds_day.jpeg";
import broken_clouds_night from "./assets/images/broken_clouds_night.jpeg";
import shower_rain_day from "./assets/images/shower_rain_day.webp";
import shower_rain_night from "./assets/images/shower_rain_night.jpeg";
import rain_day from "./assets/images/rain_day.jpeg";
import rain_night from "./assets/images/rain_night.jpeg";
import thunderstorm_day from "./assets/images/thunderstorm_day.jpeg";
import thunderstorm_night from "./assets/images/thunderstorm_night.jpeg";
import snow_day from "./assets/images/snow_day.jpeg";
import snow_night from "./assets/images/snow_night.jpeg";
import mist_day from "./assets/images/mist_day.jpeg";
import mist_night from "./assets/images/mist_night.webp";

// const apiKey = API_KEY;
// const timezoneKey = TIMEZONE_KEY;
const apiKey = "b935b1d1f1a5b4258d1e9985cb951be1";
const timezoneKey = "c5dbe5c60fa3438fbfd9b882f6d9fa00";

class App extends Component {
  state = {
    initialCity: "Moscow",
    city: undefined,
    country: undefined,
    datetime: undefined,
    gmt_offset: undefined,
    currentTemperature: undefined,
    feelsLike: undefined,
    humidity: undefined,
    wind: undefined,
    weatherDescription: undefined,
    icon: undefined,
    weekday: undefined,
    error: undefined,
    background: undefined,
  };

  backgroundState = [
    {
      iconCode: "01d",
      backgroundId: clear_sky_day,
    },
    {
      iconCode: "01n",
      backgroundId: clear_sky_night,
    },
    {
      iconCode: "02d",
      backgroundId: few_clouds_day,
    },
    {
      iconCode: "02n",
      backgroundId: few_clouds_night,
    },
    {
      iconCode: "03d",
      backgroundId: scattered_clouds_day,
    },
    {
      iconCode: "03n",
      backgroundId: scattered_clouds_night,
    },
    {
      iconCode: "04d",
      backgroundId: broken_clouds_day,
    },
    {
      iconCode: "04n",
      backgroundId: broken_clouds_night,
    },
    {
      iconCode: "09d",
      backgroundId: shower_rain_day,
    },
    {
      iconCode: "09n",
      backgroundId: shower_rain_night,
    },
    { iconCode: "10d", backgroundId: rain_day },
    { iconCode: "10n", backgroundId: rain_night },
    {
      iconCode: "11d",
      backgroundId: thunderstorm_day,
    },
    {
      iconCode: "11n",
      backgroundId: thunderstorm_night,
    },
    { iconCode: "13d", backgroundId: snow_day },
    { iconCode: "13n", backgroundId: snow_night },
    { iconCode: "50d", backgroundId: mist_day },
    { iconCode: "50n", backgroundId: mist_night },
  ];

  getWeekday = () => {
    const date = new Date();
    let options = { weekday: "long" };
    let longWeekday = new Intl.DateTimeFormat("en-US", options).format(date);
    this.setState({
      weekday: longWeekday,
    });
  };

  getTimezone = async (currentCity) => {
    const timezoneUrl = await fetch(
      `https://timezone.abstractapi.com/v1/current_time/?api_key=${timezoneKey}&location=${currentCity}`
    );
    const timezoneData = await timezoneUrl.json();
    const transformData = timezoneData.datetime.split(" ");
    const date = transformData[0];
    const time = transformData[1].slice(0, 5);
    const newData = date + " " + time;

    this.setState({
      datetime: newData,
      gmt_offset: timezoneData.gmt_offset,
    });
  };

  getIcon = async (icon) => {
    const iconUrl = await fetch(
      `http://openweathermap.org/img/wn/${icon}@2x.png`
    );
    const iconLink = iconUrl.url;
    this.setState({
      icon: iconLink,
    });
  };

  getBackground = (icon) => {
    let result;
    this.backgroundState.map((item) => {
      if (item.iconCode === icon) {
        result = item.backgroundId;
      }
      return result;
    });
    this.setState({
      background: result,
    });
  };

  getCity = (e) => {
    e.preventDefault();
    let city;
    let currentCity = e.target.elements.city.value;
    if (currentCity === undefined) {
      city = "Moscow";
    } else {
      city = currentCity;
    }
    return this.setState({
      initialCity: city,
    });
  };

  getWeather = async () => {
    const city = this.state.initialCity;
    try {
      const apiUrlDefault = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await apiUrlDefault.json();
      const icon = data.weather[0].icon;

      this.getTimezone(city);
      this.getIcon(icon);
      this.getBackground(icon);

      this.setState({
        city: data.name,
        country: data.sys.country,
        currentTemperature: Math.trunc(data.main.temp),
        feelsLike: Math.trunc(data.main.feels_like),
        humidity: data.main.humidity,
        wind: Math.trunc(data.wind.speed),
        weatherDescription: data.weather[0].description.replace(
          data.weather[0].description[0],
          data.weather[0].description[0].toUpperCase()
        ),
        error: undefined,
      });
    } catch (err) {
      this.setState({
        error: "Something is wrong",
      });
    }
  };

  componentDidMount() {
    this.getWeather();
    this.getWeekday();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.initialCity !== this.state.initialCity) {
      this.getWeather();
    }
  }

  render() {
    return (
      <MainPage
        gettingWeather={this.gettingWeather}
        city={this.state.city}
        country={this.state.country}
        date={this.state.date}
        time={this.state.time}
        currentTemperature={this.state.currentTemperature}
        feelsLike={this.state.feelsLike}
        humidity={this.state.humidity}
        wind={this.state.wind}
        weatherDescription={this.state.weatherDescription}
        icon={this.state.icon}
        datetime={this.state.datetime}
        gmt_offset={this.state.gmt_offset}
        weekday={this.state.weekday}
        background={this.state.background}
        error={this.state.error}
        getCity={this.getCity}
      />
    );
  }
}

export default App;
