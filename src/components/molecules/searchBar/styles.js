import styled from "styled-components/macro";
import { device } from "../../../device";

export const SearchBar = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid white;
  padding-top: 16px;
  padding-bottom: 4px;
  padding-right: 8px;
  padding-left: 8px;
  width: 80%;
`;

export const SearchIcon = styled.button`
  display: flex;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
  /* @media ${device.desktop} {
    font-size: 24px;
  }
  @media ${device.laptopL} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
  @media ${device.tablet} {
    font-size: 16px;
  }
  @media ${device.mobileL} {
    font-size: 14px;
  }
  @media ${device.mobileM} {
    font-size: 14px;
  }
  @media ${device.mobileS} {
    font-size: 14px;
  } */
`;
export const TempIcon = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-weight: 300;
  font-size: 25px;
  line-height: 1.75rem;
  /* @media ${device.desktop} {
    font-size: 24px;
  }
  @media ${device.laptopL} {
    font-size: 24px;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.mobileL} {
    font-size: 16px;
  }
  @media ${device.mobileM} {
    font-size: 16px;
  }
  @media ${device.mobileS} {
    font-size: 16px;
  } */
`;

export const InputField = styled.input`
  width: 80%;
  font-family: "Poppins", sans-serif;
  border-width: 0px;
  border: none;
  background-color: transparent;
  outline-width: 0px;
  box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width))
    var(--tw-ring-color);
  color: #e6e8eb;
  color: #fffff7;
  text-align: center;
  ::-webkit-input-placeholder {
    font-size: 12px;
    color: #fffff7;
    opacity: 0.3;
    text-align: center;
  }
  ::-moz-placeholder {
    font-size: 12px;
    color: #fffff7;
    opacity: 0.3;
    text-align: center;
  } /* Firefox 19+ */
  :-moz-placeholder {
    font-size: 12px;
    color: #fffff7;
    opacity: 0.3;
    text-align: center;
  } /* Firefox 18- */
  :-ms-input-placeholder {
    font-size: 12px;
    color: #fffff7;
    opacity: 0.3;
    text-align: center;
  }
`;
