import styled from 'styled-components';
import Btn1 from '../UI/Btn1';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const Hero = () => {

  return (
    <Container>
      <VerText>Build your dream home ----</VerText>
      <Content>
        <p>
          Discover the power of great design with <span>Design Space</span>
        </p>
        <h1>
          Designing<br></br> spaces that inspire
        </h1>
        <Link to="/projects">
          <Btn1>Project</Btn1>
        </Link>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  padding: var(--primary-padding);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`;

const VerText = styled.p`
  font-size: 12px;
  line-height: var(--secondary-line-height);
  letter-spacing: var(--primary-letter-spacing);
  font-weight: 100;
  text-transform: uppercase;
  position: absolute;
  left: 15px;
  bottom: 10px;
  transform: rotate(-90deg);
  transform-origin: left bottom;
`;

const Content = styled.div`
  h1,
  p {
    text-transform: uppercase;
  }

  h1 {
    font-family: 'Anton';
    font-weight: 400;
  }

  p {
    font-weight: 100;
    letter-spacing: var(--primary-letter-spacing);
    font-size: 12px;

    span {
      font-weight: 800;
    }
  }
  @media (max-width: 548px) {
    br {
      display: none;
    }
  }
`;

export default Hero;
