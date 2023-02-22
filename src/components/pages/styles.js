import styled from "styled-components/macro";
import { device } from "../../device";

export const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: start;
  @media ${device.mobile} and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LeftBarWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.desktop} and (max-width: 4000px) {
    width: 30%;
  }
  @media ${device.tablet} and (max-width: 1023px) {
    width: 30%;
  }
  @media ${device.mobile} and (max-width: 767px) {
    height: 30%;
    width: 100%;
  }
`;
export const MainInfoWrapper1 = styled.div`
  display: flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.desktop} and (max-width: 4000px) {
    width: 70%;
  }
  @media ${device.tablet} and (max-width: 1023px) {
    width: 70%;
  }
  @media ${device.mobile} and (max-width: 767px) {
    height: 70%;
  }
`;
