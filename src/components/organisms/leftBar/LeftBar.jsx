import * as S from "./styles";
import React, { Component } from "react";
import { SearchBar } from "../../../components";

class LeftBar extends Component {
  render() {
    return (
      <S.LeftBarWrapper>
        <SearchBar />
        <S.FirstBlock>
          <S.TempContainer>20 °</S.TempContainer>
          <S.HumWindContainer>
            <S.Humidity>34%</S.Humidity>
            <S.Wind>Wind: WSW 6 mph</S.Wind>
          </S.HumWindContainer>
        </S.FirstBlock>
        <div>UV index safe/dangerous%</div>
        <div>Temperature chart</div>
        <div>Temperature chart</div>
      </S.LeftBarWrapper>
    );
  }
}

export { LeftBar };
