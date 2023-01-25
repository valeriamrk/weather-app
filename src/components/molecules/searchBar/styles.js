import styled, { css } from "styled-components/macro";

export const SearchBar = styled.div`
  align-items: center;
  border-radius: 0.8rem;
  background-color: red;
`;

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  color: #8a939b;
  margin-left: 0.75rem; /* 12px */
  margin-right: 0.75rem; /* 12px */
  font-weight: 700;
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem;
  ${(props) =>
    props.white &&
    css`
      font-size: 24px;
      color: black;
    `};
`;
export const CloseIcon = styled.div`
  display: flex;
  align-items: center;
  color: #8a939b;
  margin-left: 0.75rem; /* 12px */
  margin-right: 0.75rem; /* 12px */
  font-weight: 700;
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem;
  cursor: pointer;
  ${(props) =>
    props.white &&
    css`
      font-size: 24px;
      color: black;
    `};
`;
