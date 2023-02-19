import React from "react";
import * as S from "./styles";
import { SearchBar } from "../../../components";

const MainInfo = (props) => {
  const {
    weatherDescription,
    icon,
    city,
    country,
    weekday,
    datetime,
    gmt_offset,
  } = props;
  return (
    <S.MainInfoWrapper>
      <S.SearchBarWrapper>
        <SearchBar />
      </S.SearchBarWrapper>

      <S.Title>{weatherDescription}</S.Title>
      <S.Description>
        <img src={icon} alt="icon" />
        {country}, {city} <br />
        {weekday}
        <br />
        {datetime}
        <br />
        GMT {gmt_offset}
      </S.Description>
    </S.MainInfoWrapper>
  );
};

export { MainInfo };
