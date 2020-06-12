import styled from 'styled-components';

export const StyledMovieDetailsBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 80px;
  height: auto;
  background: black;
  border-bottom: 1px solid #fff;
  padding: 20px;
  box-sizing: border-box;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 20px;

  .movieDetailsBarContent {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    color: #fff;
  }

  .movieDetailsBarColumnContent {
    float: left;
    width: 30%;
    box-sizing: border-box;
    padding: 0 10px 0 0;
  }

  .movieDetailsBarInfo {
    padding: 5px 0 0 20px;
    float: left;
  }

  .fa-time,
  .fa-revenue {
    float: left;
    margin-top: -4px;
  }

  .fa-budget {
    float: left;
    margin-top: -3px;
  }

  @media screen and (max-width: 768px) {
    .fa-time,
    .fa-revenue,
    .fa-budget {
      display: none;
    }
  }

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;
