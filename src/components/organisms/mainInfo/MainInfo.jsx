import React, { Component } from "react";
import * as S from "./styles";

class MainInfo extends Component {
  render() {
    return (
      <S.MainInfoWrapper>
        <S.Title>{this.props.weatherDescription}</S.Title>
        <S.Description>
          <img src={this.props.icon} alt="icon" />
          {this.props.country}, {this.props.city} <br />
          {this.props.weekday},<br />
          {this.props.datetime} {this.props.date}
          {this.props.time}
          <br />
          GMT {this.props.gmt_offset}
        </S.Description>
      </S.MainInfoWrapper>
    );
  }
}

export { MainInfo };
