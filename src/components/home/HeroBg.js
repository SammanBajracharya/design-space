import React from 'react'
import styled from 'styled-components'

const HeroBg = () => {
  return (
    <Container>
      <Hor></Hor>
      <Ver></Ver>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
`;

const Hor = styled.div`
  position: absolute;
  height: calc(100% / 3);
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  top: 50%;
  transform: translateY(-50%);
  `;

const Ver = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100vw / 3);
  height: 100%;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
`;

export default HeroBg;