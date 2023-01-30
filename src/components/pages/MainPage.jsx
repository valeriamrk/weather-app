import React from "react";
import { LeftBar, MainInfo } from "../../components";
import * as S from "./styles";

const MainPage = () => {
  return (
    <S.MainPageWrapper>
      <S.LeftBarWrapper>
        <LeftBar />
      </S.LeftBarWrapper>
      <S.MainInfoWrapper1>
        <MainInfo />
      </S.MainInfoWrapper1>
    </S.MainPageWrapper>
  );
};

export { MainPage };
