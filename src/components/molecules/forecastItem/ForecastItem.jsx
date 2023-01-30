import React, { Component } from "react";
import * as S from "./styles";

class ForecastItem extends Component {
  render() {
    return (
      <S.ItemWrapper>
        <div>Sun, Jan 30</div>
        <div>15 / 10°C</div>
        <div>icon</div>
      </S.ItemWrapper>
    );
  }
}

export { ForecastItem };
