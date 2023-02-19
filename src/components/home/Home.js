import styled from 'styled-components';
import Hero from './Hero';
import HeroBg from './HeroBg';
import HomeSlider from './HomeSlider';
import { useSelector } from 'react-redux';
import { projectData } from '../../features/Project/projectSlice';

const Home = () => {
  const project = useSelector(projectData);
  const data = project.project;
  return (
    <Container>
      <Bg />
      <Hero />
      <HomeSlider projectData={data} />
    </Container>
  );
};

const Container = styled.div`
  height: 80vh;
  position: relative;
`;

const Bg = styled(HeroBg)`
  height: 80vh;
  width: 100%;
`;


export default Home;
