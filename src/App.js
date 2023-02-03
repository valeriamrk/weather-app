import "./App.css";
import { MainPage } from "./components";
import React, { Component } from "react";
import { API_KEY } from "./config/config";

const apiKey = API_KEY;

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    currentTemperature: undefined,
    feelsLike: undefined,
    humidity: undefined,
    wind: undefined,
    weatherDescription: undefined,
    error: undefined,
  };

  getDefaultWeather = async () => {
    const apiUrlDefault = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=${apiKey}&units=metric`
    );
    const dataDefault = await apiUrlDefault.json();
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

      error: undefined,
    });
  };

  gettingWeather = async (e) => {
    e.preventDefault();
    const currentCity = e.target.elements.city.value;
    const apiUrl = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=metric`
    );
    const data = await apiUrl.json();
    console.log(data);
    console.log(currentCity);

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
  };

  componentDidMount() {
    this.getDefaultWeather();
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
        error={this.state.error}
      />
    );
  }
}

export default App;
