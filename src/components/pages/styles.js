import styled from "styled-components/macro";

export const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: start;
`;
export const LeftBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;
export const MainInfoWrapper1 = styled.div`
  display: flex;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
