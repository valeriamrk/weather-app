import "./App.css";
import { MainPage } from "./components";
import React, { Component } from "react";
// import { API_KEY, TIMEZONE_KEY } from "./config/config";
import backgrounds from "./assets/constants/backgrounds";
import icon from "./assets/constants/icons";

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

  imagesState = [
    {
      iconCode: "01d",
      backgroundId: backgrounds.clear_sky_day,
      iconID: icon.icon_01d,
    },
    {
      iconCode: "01n",
      backgroundId: backgrounds.clear_sky_night,
      iconID: icon.icon_01n,
    },
    {
      iconCode: "02d",
      backgroundId: backgrounds.few_clouds_day,
      iconID: icon.icon_02d,
    },
    {
      iconCode: "02n",
      backgroundId: backgrounds.few_clouds_night,
      iconID: icon.icon_02n,
    },
    {
      iconCode: "03d",
      backgroundId: backgrounds.scattered_clouds_day,
      iconID: icon.icon_03d,
    },
    {
      iconCode: "03n",
      backgroundId: backgrounds.scattered_clouds_night,
      iconID: icon.icon_03n,
    },
    {
      iconCode: "04d",
      backgroundId: backgrounds.broken_clouds_day,
      iconID: icon.icon_04d,
    },
    {
      iconCode: "04n",
      backgroundId: backgrounds.broken_clouds_night,
      iconID: icon.icon_04n,
    },
    {
      iconCode: "09d",
      backgroundId: backgrounds.shower_rain_day,
      iconID: icon.icon_09d,
    },
    {
      iconCode: "09n",
      backgroundId: backgrounds.shower_rain_night,
      iconID: icon.icon_09n,
    },
    {
      iconCode: "10d",
      backgroundId: backgrounds.rain_day,
      iconID: icon.icon_10d,
    },
    {
      iconCode: "10n",
      backgroundId: backgrounds.rain_night,
      iconID: icon.icon_10n,
    },
    {
      iconCode: "11d",
      backgroundId: backgrounds.thunderstorm_day,
      iconID: icon.icon_11d,
    },
    {
      iconCode: "11n",
      backgroundId: backgrounds.thunderstorm_night,
      iconID: icon.icon_11n,
    },
    {
      iconCode: "13d",
      backgroundId: backgrounds.snow_day,
      iconID: icon.icon_13d,
    },
    {
      iconCode: "13n",
      backgroundId: backgrounds.snow_night,
      iconID: icon.icon_13n,
    },
    {
      iconCode: "50d",
      backgroundId: backgrounds.mist_day,
      iconID: icon.icon_50d,
    },
    {
      iconCode: "50n",
      backgroundId: backgrounds.mist_night,
      iconID: icon.icon_50n,
    },
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
    let result;
    this.imagesState.map((item) => {
      if (item.iconCode === icon) {
        result = item.backgroundId;
      }
      return result;
    });
    this.setState({
      background: result,
    });
  };

  getBackground = (icon) => {
    let result;
    this.imagesState.map((item) => {
      if (item.iconCode === icon) {
        result = item.iconID;
      }
      return result;
    });
    this.setState({
      icon: result,
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
      console.log(icon);

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
