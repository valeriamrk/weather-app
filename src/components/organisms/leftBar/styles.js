import styled from "styled-components/macro";

export const LeftBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;
