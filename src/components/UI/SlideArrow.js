import styled from 'styled-components';
import '../../index.css';

export const SlickArrow = styled.button`
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  position: absolute;
  z-index: 2;
  height: var(--slide-arrow-size);
  width: var(--slide-arrow-size);
  border-radius: 50%;
  background: rgba(255 255 255 / 5%);
  color: white;
  border: 1px solid #fff;
  padding: 50px;

  &:before {
    content: '';
  }
  transition: all .3s ease;
  &:hover {
    color: var(--primary-yellow);
  }
`;
