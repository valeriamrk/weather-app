import React, { Component } from "react";
import { LeftBar, MainInfo } from "../../components";
import * as S from "./styles";

export default class MainPage extends Component {
  render() {
    return (
      <S.MainPageWrapper>
        <S.LeftBarWrapper>
          <LeftBar gettingWeather={this.props.gettingWeather} />
        </S.LeftBarWrapper>
        <S.MainInfoWrapper1>
          <MainInfo />
        </S.MainInfoWrapper1>
      </S.MainPageWrapper>
    );
  }
}

export { MainPage };
