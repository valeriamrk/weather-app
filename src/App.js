import "./App.css";
import { MainPage } from "./components";
import React, { Component } from "react";
import { API_KEY } from "./config/config";

const apiKey = API_KEY;

class App extends Component {
  gettingWeather = async (e) => {
    e.preventDefault();
    const currentCity = e.target.elements.city.value;
    const apiUrl = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${currentCity}&limit=5&appid=${apiKey}`
    );
    const data = await apiUrl.json();
    console.log(data);
    console.log("click");
    console.log(currentCity);
  };

  render() {
    return <MainPage gettingWeather={this.gettingWeather} />;
  }
}

export default App;
