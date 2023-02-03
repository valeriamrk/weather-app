import React, { Component } from "react";
import * as S from "./styles";
import { BsCloudRainHeavy } from "react-icons/bs";
import { Forecast } from "../../../components";

class MainInfo extends Component {
  state = {
    currentDate: new Date().toLocaleString(),
    // weekday: Date().getDay(),
  };

  getWeekday = () => {
    const date = new Date();
    let weekday = date.getDate();
    console.log(weekday);
  };

  componentDidMount() {
    this.getWeekday();
  }

  render() {
    return (
      <S.MainInfoWrapper>
        <S.Title>{this.props.weatherDescription}</S.Title>
        <S.Description>
          <BsCloudRainHeavy /> {this.props.country}, {this.props.city},
          {this.state.currentDate} Friday
          {/* {this.state.weekday} */}
        </S.Description>
        {/* <S.ForecastWrapper>
          <Forecast />
        </S.ForecastWrapper> */}
      </S.MainInfoWrapper>
    );
  }
}

export { MainInfo };
