import styled from 'styled-components';

export const Mesh = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  h1 {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 42px;
    color: #fff;

    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
  }
`;

export const MeshContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-gap: 40px;
  position: relative;

  .meshElement {
    animation: animateMesh 0.5s;
  }

  @keyframes animateMesh {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
