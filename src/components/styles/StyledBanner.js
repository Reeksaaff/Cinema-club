import styled from 'styled-components';

export const BannerStyles = styled.div`
background: black;
padding: 0 20px;
box-sizing: border-box;

.header-content {
  max-width: 1280px;
  min-height: 120px;
  padding: 20px 0px;
  margin: 0 auto;
  box-sizing: border-box;

  @media screen and (max-width: 500px) {
    max-width: 1280px;
    min-height: 0px;
  }
}

  .BannerTitleStyles {
    font-size: 60px;
    color: #fff;
    display: inline-block;
    float: left;
    margin: 60px 0 30px 0px; 
    font-family: 'Roboto Condensed', sans-serif;

    @media screen and (max-width: 500px) {
      font-size: 40px;
      margin: 35px 0 20px 0;
     
    }
  }
`;

export const LogoStyles = styled.img`
width: 120px;
margin-top: 20px;

@media screen and (max-width: 500px) {
  width: 100px;
  margin-top: 5px;
  margin-left: 15px;
}
`;
