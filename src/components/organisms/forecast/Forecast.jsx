import React, { Component } from "react";
import { ForecastItem } from "../../../components";
import * as S from "./styles";

class Forecast extends Component {
  render() {
    return (
      <S.ForecastWrapper>
        <S.Title>8-day forecast</S.Title>
        <S.ForecastList>
          <ForecastItem />
          <ForecastItem />
          <ForecastItem />
          <ForecastItem />
          <ForecastItem />
          <ForecastItem />
          <ForecastItem />
          <ForecastItem />
        </S.ForecastList>
      </S.ForecastWrapper>
    );
  }
}

export { Forecast };
