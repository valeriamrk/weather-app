import styled from "styled-components/macro";
import { device } from "../../../device";

export const LeftBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  @media ${device.mobile} and (max-width: 767px) {
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 0px;
    background: none;
    backdrop-filter: none;
    border: none;
  }
`;

// 1. Head block

export const FirstBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 85%;
  @media ${device.mobile} and (max-width: 767px) {
    margin-top: 0px;
  }
`;

// City location

export const CityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 40px;
  @media ${device.mobile} and (max-width: 767px) {
    margin-top: 10px;
    margin-bottom: 0px;
  }
`;

export const City = styled.div`
  margin-left: 8px;

  @media ${device.desktop} and (max-width: 4000px) {
    font-size: 28px;
  }
  @media ${device.tablet} and (max-width: 1023px) {
    font-size: 16px;
  }
  @media ${device.mobile} and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const LocationIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media ${device.desktop} and (max-width: 4000px) {
    font-size: 36px;
  }
  @media ${device.tablet} and (max-width: 1023px) {
    font-size: 16px;
  }
  @media ${device.mobile} and (max-width: 767px) {
    font-size: 14px;
  }
`;

// Temperature

export const TempContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TempText = styled.div`
  font-weight: 700;

  @media ${device.desktop} and (max-width: 4000px) {
    font-size: 58px;
  }
  @media ${device.tablet} and (max-width: 1023px) {
    font-size: 26px;
  }
  @media ${device.mobile} and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const WeatherIcon = styled.img`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${device.desktop} and (max-width: 4000px) {
    width: 100px;
  }
  @media ${device.tablet} and (max-width: 1023px) {
    width: 50px;
  }
  @media ${device.mobile} and (max-width: 767px) {
    width: 50px;
  }
`;

// Feels like

export const FeelsLikeText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* font-size: 24px; */
  margin-left: 8px;
  @media ${device.desktop} and (max-width: 4000px) {
    font-size: 20px;
  }
  @media ${device.tablet} and (max-width: 1023px) {
    font-size: 16px;
  }
  @media ${device.mobile} and (max-width: 767px) {
    font-size: 14px;
  }
`;

// 2. Humidity/wind container

export const SecondBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
  width: 80%;
  @media ${device.mobile} and (max-width: 767px) {
    margin-bottom: 16px;
  }
`;

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  @media ${device.mobile} and (max-width: 767px) {
    margin-top: 10px;
  }
`;

export const WeatherText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 8px;

  @media ${device.desktop} and (max-width: 4000px) {
    font-size: 20px;
  }
  @media ${device.tablet} and (max-width: 1023px) {
    font-size: 16px;
  }
  @media ${device.mobile} and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const HumWindIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${device.desktop} and (max-width: 4000px) {
    font-size: 32px;
  }
  @media ${device.tablet} and (max-width: 1023px) {
    font-size: 16px;
  }
  @media ${device.mobile} and (max-width: 767px) {
    font-size: 14px;
  }
`;
