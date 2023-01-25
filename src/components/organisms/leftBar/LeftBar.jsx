import * as S from "./styles";
import React, { Component } from "react";
import { SearchBar } from "../../../components";

class LeftBar extends Component {
  render() {
    return (
      <S.LeftBarWrapper>
        <SearchBar />
        <div>Temeprature, humidity %</div>
        <div>UV index safe/dangerous%</div>
        <div>Temperature chart</div>
        <div>Temperature chart</div>
      </S.LeftBarWrapper>
    );
  }
}

export { LeftBar };
