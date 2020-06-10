import styled from 'styled-components';

export const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background: black;
  border-top: 1px solid #fff;
  color: #fff;

  .navigationContent {
    max-width: 1280px;
    padding: 0 20px;
    width: 100%;

    p {
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 22px;
      float: left;
      color: #fff;
      padding-right: 10px;
      text-decoration: none;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
`;
