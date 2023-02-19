import React from 'react';
import styled from 'styled-components';

const Btn1 = (props) => {
  return (
    <Btn>
      <span>{props.children}</span>
    </Btn>
  );
};

const Btn = styled.button`
  cursor: pointer;
  position: relative;
  border: 1px solid var(--clr-white);
  outline: none;
  padding: 10px 25px;
  background: transparent;
  width: 180px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    transform-origin: top;
    background: var(--clr-white);
    transform: scaleY(0);
    height: 100%;
    width: 100%;
    transition: transform 0.3s var(--primary-transition);
  }
  
  span {
    position: relative;
    z-index: 1;
    color: var(--clr-white);
    letter-spacing: var(--secondary-letter-spacing);
    font-size: 400;
    text-transform: uppercase;
    transition: all 0.3s var(--primary-transition);
  }

  &:hover {
    span {
      color: var(--clr-black);
    }
    &:before {
      transform: scaleY(100%);
      transform-origin: bottom;
    }
  }
`;

export default Btn1;
