import styled from 'styled-components';

export const SearchInputStyles = styled.div`
  width: 100%;
  height: 100px;
  background: black;
  padding: 25px 0 0 0;
  box-sizing: border-box;
  color: #fff;
`;

export const SearchInputContent = styled.div`
  max-width: 1280px;
  width: 89%;
  height: 55px;
  background: white;
  margin-left: 20px;
  position: relative;
  color: #fff;

  .fa-search {
    position: absolute;
    right: 20px;
    top: 12px;
    color: black;
    z-index: 1;
    font-size: 28px;
  }

  input {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 22px;
    position: absolute;
    left: -30px;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 100%;
    background: transparent;
    height: 40px;
    color: #000;
    box-sizing: border-box;

    :focus {
      outline: none;
    }

    @media screen and (max-width: 720px) {
      font-size: 20px;
    }
  }
`;
