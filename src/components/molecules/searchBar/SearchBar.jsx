import React, { Component } from "react";
import { InputField } from "../../../components";
import * as S from "./styles";
import { CiTempHigh } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";

class SearchBar extends Component {
  render() {
    return (
      <S.SearchBar>
        <S.TempIcon>
          <CiTempHigh />
        </S.TempIcon>
        <InputField />
        <S.SearchIcon>
          <IoSearchOutline />
        </S.SearchIcon>
      </S.SearchBar>
    );
  }
}

export { SearchBar };
