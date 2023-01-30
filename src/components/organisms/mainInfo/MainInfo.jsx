import React, { Component } from "react";
import * as S from "./styles";
import { BsCloudRainHeavy } from "react-icons/bs";
import { Forecast } from "../../../components";

class MainInfo extends Component {
  render() {
    return (
      <S.MainInfoWrapper>
        <S.Title>
          Storm <br /> with Heavy Rain
        </S.Title>
        <S.Description>
          <BsCloudRainHeavy /> RU, Moscow, Friday, jan 29, 2023, 8.45PM
        </S.Description>
        <S.ForecastWrapper>
          <Forecast />
        </S.ForecastWrapper>
      </S.MainInfoWrapper>
    );
  }
}

export { MainInfo };
