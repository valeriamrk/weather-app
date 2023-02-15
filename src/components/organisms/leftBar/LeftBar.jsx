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
          <img src={icon} alt="icon" />
          {currentTemperature} °C
        </S.TempContainer>
        <div> Feels like: {feelsLike}</div>
      </S.FirstBlock>
      <S.SecondBlock>
        <S.WeatherContainer>
          <S.WeatherIcon>
            <WiHumidity />
          </S.WeatherIcon>
          <S.WeatherText>Humidity: {humidity}%</S.WeatherText>
        </S.WeatherContainer>
        <S.WeatherContainer>
          <S.WeatherIcon>
            <WiStrongWind />
          </S.WeatherIcon>
          <S.WeatherText>Wind: WSW {wind} mph</S.WeatherText>
        </S.WeatherContainer>
      </S.SecondBlock>
    </S.LeftBarWrapper>
  );
};

export { LeftBar };
