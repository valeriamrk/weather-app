import React from "react";
import * as S from "./styles";
import { CiTempHigh } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = (props) => {
  const { getCity } = props;
  return (
    <S.SearchBar onSubmit={getCity}>
      <S.TempIcon>
        <CiTempHigh />
      </S.TempIcon>
      <S.InputField name="city" placeholder="enter the city" />
      <S.SearchIcon>
        <IoSearchOutline />
      </S.SearchIcon>
    </S.SearchBar>
  );
};

export { SearchBar };
