import styled from "styled-components/macro";

export const SearchBar = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid white;
  padding-top: 16px;
  padding-bottom: 8px;
  padding-right: 8px;
  padding-left: 8px;
`;

export const SearchIcon = styled.button`
  display: flex;
  align-items: center;
  color: white;
  margin-left: 0.75rem; /* 12px */
  margin-right: 0.75rem; /* 12px */
  font-weight: 700;
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
export const TempIcon = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin-left: 0.75rem; /* 12px */
  margin-right: 0.75rem; /* 12px */
  font-weight: 300;
  font-size: 25px;
  line-height: 1.75rem;
`;

export const InputField = styled.input`
  font-family: "Poppins", sans-serif;
  border-width: 0px;
  border: none;
  background-color: transparent;
  outline-width: 0px;
  box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width))
    var(--tw-ring-color);
  color: #e6e8eb;
`;
