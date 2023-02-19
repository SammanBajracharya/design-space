import styled from "styled-components";
import EastIcon from '@mui/icons-material/East';

const Btn2 = (props) => {
  return (
    <Container>
      {props.children}
      <EastIcon />
    </Container>
  )
}

const Container = styled.a`
  cursor: pointer;
  font-size: 12px;
  letter-spacing: var(--secondary-letter-spacing);
  font-weight: 400;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 12px;
  
  svg {
    transition: all 0.3s var(--primary-transition); 
    width: 16px;
    padding-bottom: 2px;
  }

  &:hover {
    svg {
      transform: translateX(10px);
    }
  }
`;

export default Btn2;