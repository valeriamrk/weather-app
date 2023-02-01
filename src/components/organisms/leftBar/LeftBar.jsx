import * as S from "./styles";
import React, { Component } from "react";
import { SearchBar } from "../../../components";
import { MdPlace } from "react-icons/md";

class LeftBar extends Component {
  render() {
    return (
      <S.LeftBarWrapper>
        <S.FirstBlock>
          <SearchBar gettingWeather={this.props.gettingWeather} />
          <S.City>
            <MdPlace />
            RU, Moscow
          </S.City>
          <S.TempContainer>20 °</S.TempContainer>
          <S.HumWindContainer>
            <S.Humidity>34%</S.Humidity>
            <S.Wind>Wind: WSW 6 mph</S.Wind>
          </S.HumWindContainer>
        </S.FirstBlock>
        <S.UVContainer>
          <S.UVTitle>UV Index 0.8%</S.UVTitle>
          <S.UVDescription>
            <S.UVSafeDanger>
              <div>Safe</div>
              <div>
                <S.DotSize
                  alt="yellow dot"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7c/GAudit_YellowDot.png"
                />
                0.00% - 0.9%
              </div>
              <div>
                <S.DotSize
                  alt="orange dot"
                  src="https://images.emojiterra.com/twitter/v14.0/512px/1f7e0.png"
                />
                0.9% - 11%
              </div>
            </S.UVSafeDanger>
            <S.UVSafeDanger>
              <div>Dangerous</div>
              <div>
                <S.DotSize
                  alt="red dot"
                  src="https://www.freepnglogos.com/uploads/dot-png/file-location-dot-red-svg-wikipedia-0.png"
                />
                12% - 38%
              </div>
              <div>
                <S.DotSize
                  alt="dark red dot"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Location_dot_dark_red.svg/768px-Location_dot_dark_red.svg.png"
                />
                39% - 90%
              </div>
            </S.UVSafeDanger>
          </S.UVDescription>
        </S.UVContainer>
      </S.LeftBarWrapper>
    );
  }
}

export { LeftBar };
