import styled from "styled-components/macro";
import { device } from "../../../device";

export const MainInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  @media ${device.desktop} and (max-width: 4000px) {
    justify-content: center;
    align-items: flex-start;
  }
  @media ${device.tablet} and (max-width: 1023px) {
    font-size: 60px;
  }
  @media ${device.mobile} and (max-width: 767px) {
    align-items: center;
  }
`;

export const Title = styled.div`
  margin-bottom: 40px;
  @media ${device.desktop} and (max-width: 4000px) {
    font-size: 80px;
    margin-left: 60px;
  }
  @media ${device.tablet} and (max-width: 1023px) {
    font-size: 60px;
    margin-left: 60px;
    margin-right: 16px;
  }
  @media ${device.mobile} and (max-width: 767px) {
    font-size: 40px;
    margin-left: 20px;
    margin-right: 8px;
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  @media ${device.desktop} and (max-width: 4000px) {
    font-size: 32px;
    margin-left: 50px;
    margin-top: 40px;
  }
  @media ${device.tablet} and (max-width: 1023px) {
    font-size: 28px;
    margin-left: 50px;
    margin-top: 40px;
  }
  @media ${device.mobile} and (max-width: 767px) {
    font-size: 16px;
    /* margin-bottom: 30px; */
  }
`;
