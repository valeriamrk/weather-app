import React, { Component } from "react";
import { LeftBar, MainInfo } from "../../components";
import * as S from "./styles";

export default class MainPage extends Component {
  render() {
    return (
      <S.MainPageWrapper>
        <S.LeftBarWrapper>
          <LeftBar
            gettingWeather={this.props.gettingWeather}
            city={this.props.city}
            country={this.props.country}
            currentTemperature={this.props.currentTemperature}
            feelsLike={this.props.feelsLike}
            humidity={this.props.humidity}
            wind={this.props.wind}
            error={this.props.error}
            icon={this.props.icon}
          />
        </S.LeftBarWrapper>
        <S.MainInfoWrapper1>
          <MainInfo
            weatherDescription={this.props.weatherDescription}
            city={this.props.city}
            country={this.props.country}
            datetime={this.props.datetime}
            gmt_offset={this.props.gmt_offset}
            icon={this.props.icon}
            weekday={this.props.weekday}
          />
        </S.MainInfoWrapper1>
      </S.MainPageWrapper>
    );
  }
}

export { MainPage };
