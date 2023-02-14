import React from "react";
import { LeftBar, MainInfo } from "../../components";
import * as S from "./styles";

const MainPage = (props) => {
  const {
    background,
    gettingWeather,
    city,
    country,
    currentTemperature,
    feelsLike,
    humidity,
    wind,
    error,
    icon,
    weatherDescription,
    datetime,
    gmt_offset,
    weekday,
  } = props;
  return (
    <S.MainPageWrapper background={background}>
      <S.LeftBarWrapper>
        <LeftBar
          gettingWeather={gettingWeather}
          city={city}
          country={country}
          currentTemperature={currentTemperature}
          feelsLike={feelsLike}
          humidity={humidity}
          wind={wind}
          error={error}
          icon={icon}
        />
      </S.LeftBarWrapper>
      <S.MainInfoWrapper1>
        <MainInfo
          weatherDescription={weatherDescription}
          city={city}
          country={country}
          datetime={datetime}
          gmt_offset={gmt_offset}
          icon={icon}
          weekday={weekday}
        />
      </S.MainInfoWrapper1>
    </S.MainPageWrapper>
  );
};

export { MainPage };
