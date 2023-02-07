import "./App.css";
import { MainPage } from "./components";
import React, { Component } from "react";
import { API_KEY, TIMEZONE_KEY } from "./config/config";

const apiKey = API_KEY;
const timezoneKey = TIMEZONE_KEY;

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    currentTemperature: undefined,
    feelsLike: undefined,
    humidity: undefined,
    wind: undefined,
    weatherDescription: undefined,
    icon: undefined,
    datetime: undefined,
    gmt_offset: undefined,
    weekday: undefined,
    error: undefined,
  };

  getWeekday = () => {
    const date = new Date();
    let options = { weekday: "long" };
    let longWeekday = new Intl.DateTimeFormat("en-US", options).format(date);
    this.setState({
      weekday: longWeekday,
    });
  };

  getDefaultWeather = async () => {
    const apiUrlDefault = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=${apiKey}&units=metric`
    );
    const dataDefault = await apiUrlDefault.json();

    const icon = dataDefault.weather[0].icon;
    const iconUrl = await fetch(
      `http://openweathermap.org/img/wn/${icon}@2x.png`
    );
    const iconLink = iconUrl.url;
    console.log(iconLink);

    const timezoneUrl = await fetch(
      `https://timezone.abstractapi.com/v1/current_time/?api_key=${timezoneKey}&location=Moscow`
    );
    const timezoneData = await timezoneUrl.json();
    const transformedTime = timezoneData.datetime.split(":", 2).join(":");

    this.setState({
      city: dataDefault.name,
      country: dataDefault.sys.country,
      currentTemperature: Math.trunc(dataDefault.main.temp),
      feelsLike: Math.trunc(dataDefault.main.feels_like),
      humidity: dataDefault.main.humidity,
      wind: Math.trunc(dataDefault.wind.speed),
      weatherDescription: dataDefault.weather[0].description.replace(
        dataDefault.weather[0].description[0],
        dataDefault.weather[0].description[0].toUpperCase()
      ),
      icon: iconLink,
      datetime: transformedTime,
      gmt_offset: 3,
      error: undefined,
    });
  };

  gettingWeather = async (e) => {
    e.preventDefault();
    const currentCity = e.target.elements.city.value;
    try {
      const apiUrl = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=metric`
      );
      const data = await apiUrl.json();

      const icon = data.weather[0].icon;
      const iconUrl = await fetch(
        `http://openweathermap.org/img/wn/${icon}@2x.png`
      );
      const iconLink = iconUrl.url;
      console.log(iconLink);

      const timezoneUrl = await fetch(
        `https://timezone.abstractapi.com/v1/current_time/?api_key=${timezoneKey}&location=${currentCity}`
      );
      const timezoneData = await timezoneUrl.json();
      const transformedTime = timezoneData.datetime.split(":", 2).join(":");

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
        icon: iconLink,
        datetime: transformedTime,
        gmt_offset: timezoneData.gmt_offset,
        error: undefined,
      });
    } catch (err) {
      this.setState({
        error: "Incorrect city",
      });
    }
  };

  componentDidMount() {
    this.getDefaultWeather();
    this.getWeekday();
  }

  render() {
    return (
      <MainPage
        gettingWeather={this.gettingWeather}
        city={this.state.city}
        country={this.state.country}
        currentTemperature={this.state.currentTemperature}
        feelsLike={this.state.feelsLike}
        humidity={this.state.humidity}
        wind={this.state.wind}
        weatherDescription={this.state.weatherDescription}
        icon={this.state.icon}
        datetime={this.state.datetime}
        gmt_offset={this.state.gmt_offset}
        weekday={this.state.weekday}
        error={this.state.error}
      />
    );
  }
}

export default App;
