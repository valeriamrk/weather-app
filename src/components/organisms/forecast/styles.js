import styled from "styled-components/macro";

export const ForecastWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
`;

export const Title = styled.div`
  font-size: 40px;
  margin-top: 5%;
  margin-left: 60px;
`;

export const ForecastList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  margin-top: 20px;
  margin-left: 60px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
