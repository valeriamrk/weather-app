import * as S from "./styles";
import React from "react";
import { SearchBar } from "../../../components";
import { MdPlace } from "react-icons/md";
import { WiHumidity, WiStrongWind } from "react-icons/wi";

const LeftBar = (props) => {
  const {
    gettingWeather,
    error,
    country,
    city,
    icon,
    currentTemperature,
    feelsLike,
    humidity,
    wind,
    getCity,
  } = props;
  return (
    <S.LeftBarWrapper>
      <S.FirstBlock>
        <SearchBar gettingWeather={gettingWeather} getCity={getCity} />
        <div>{error}</div>
        <S.CityContainer>
          <S.LocationIcon>
            <MdPlace />
          </S.LocationIcon>
          <S.City>
            {country}, {city}
          </S.City>
        </S.CityContainer>
        <S.TempContainer>
          <S.WeatherIcon src={icon} alt="icon" />
          <S.TempText>{currentTemperature} °C</S.TempText>
        </S.TempContainer>
        <S.FeelsLikeText> Feels like: {feelsLike}</S.FeelsLikeText>
      </S.FirstBlock>
      <S.SecondBlock>
        <S.WeatherContainer>
          <S.HumWindIcon>
            <WiHumidity />
          </S.HumWindIcon>
          <S.WeatherText>Humidity: {humidity}%</S.WeatherText>
        </S.WeatherContainer>
        <S.WeatherContainer>
          <S.HumWindIcon>
            <WiStrongWind />
          </S.HumWindIcon>
          <S.WeatherText>Wind: WSW {wind} mph</S.WeatherText>
        </S.WeatherContainer>
      </S.SecondBlock>
    </S.LeftBarWrapper>
  );
};

export { LeftBar };
