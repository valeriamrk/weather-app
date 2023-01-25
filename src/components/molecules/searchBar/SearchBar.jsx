import React, { Component } from "react";
import { InputField } from "../../../components";
import * as S from "./styles";

class SearchBar extends Component {
  render() {
    return (
      <S.SearchBar>
        <InputField />
      </S.SearchBar>
    );
  }
}

export { SearchBar };
