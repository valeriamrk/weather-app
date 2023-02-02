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
    humidity: undefined,
    wind: undefined,
    uvIndex: undefined,
    weatherDescription: undefined,
    error: undefined,
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
      currentTemperature: data.main.temp,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      weatherDescription: data.weather[0].description,
      error: undefined,
    });
  };

  render() {
    return (
      <MainPage
        gettingWeather={this.gettingWeather}
        city={this.state.city}
        country={this.state.country}
        currentTemperature={this.state.currentTemperature}
        humidity={this.state.humidity}
        wind={this.state.wind}
        weatherDescription={this.state.weatherDescription}
        error={this.state.error}
      />
    );
  }
}

export default App;
