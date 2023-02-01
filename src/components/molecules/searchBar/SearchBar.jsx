import React, { Component } from "react";
import * as S from "./styles";
import { CiTempHigh } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";

class SearchBar extends Component {
  render() {
    return (
      <S.SearchBar onSubmit={this.props.gettingWeather}>
        <S.TempIcon>
          <CiTempHigh />
        </S.TempIcon>
        <S.InputField name="city" placeholder="enter the city" />
        <S.SearchIcon>
          <IoSearchOutline />
        </S.SearchIcon>
      </S.SearchBar>
    );
  }
}

export { SearchBar };
