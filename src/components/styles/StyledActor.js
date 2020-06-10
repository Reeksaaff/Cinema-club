import styled from 'styled-components';

export const StyledActor = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  color: #000;
  background: #fff;
  padding: 5px;
  text-align: center;

  img {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .actorName {
    display: block;
    font-size: 18px;
    margin: 10px 0 0 0;
  }

  .actorCharacter {
    display: block;
    font-size: 16px;
    margin: 0 0 10px 0;
  }
`;
