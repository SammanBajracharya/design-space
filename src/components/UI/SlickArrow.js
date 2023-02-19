import styled from 'styled-components';

export const SlickArrow = styled.button`
  border: 1px solid var(--clr-white);
  background: rgba(255, 255, 255, 0.2);
  color: var(--clr-white);
  font-size: 12px;
  text-transform: lowercase;
  border-radius: 25px;
  padding: 2px 18px 3px 18px;
  position: relative;
  overflow: hidden;

  span {
    position: relative;
    z-index: 2;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    transform-origin: top;
    background: var(--primary-grey-color-2);
    transform: scaleY(0);
    z-index: 1;
    height: 100%;
    width: 100%;
    transition: transform 0.3s var(--primary-transition);
  }

  &:hover {
    &:before {
      transform: scaleY(100%);
      transform-origin: bottom;
    }
  }
`;