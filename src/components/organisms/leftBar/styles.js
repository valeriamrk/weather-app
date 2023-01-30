import styled from "styled-components/macro";

export const LeftBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* width: 25%; */
  height: 100vh;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const FirstBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 20%;
`;

export const TempContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 56px;
`;

export const HumWindContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 20%;
`;

export const Wind = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  margin-left: 24px;
`;

export const Humidity = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 24px;
`;
