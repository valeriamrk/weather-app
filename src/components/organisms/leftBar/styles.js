import styled from "styled-components/macro";

export const LeftBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
  margin-top: 20px;
`;

export const TempContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 64px;
  font-weight: 700;
`;

export const HumWindContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
export const City = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 36px;
  margin-bottom: 20px;
  margin-top: 40px;
`;

// Uv container

export const UVTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 16px;
`;
export const UVDescription = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;
export const UVContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 40px;
`;
export const UVSafeDanger = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
`;

export const DotSize = styled.img`
  width: 6px;
  margin-right: 6px;
`;
