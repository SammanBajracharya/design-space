import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { projectData } from '../../features/Project/projectSlice';
import { useSelector } from 'react-redux';

const Projects = () => {
  const project = useSelector(projectData);
  const data = project.project;
  return (
    <>
      <VerText>Build your dream home ----</VerText>
      <Container>
        {data &&
          data.map((project) => (
            <Link to={`/projects/${project.sys.id}`} key={project.sys.id}>
              <Item>
                <img
                  src={project.fields && project.fields.projectThumbnail.fields.file.url}
                  alt={project.fields && project.fields.projectThumbnail.fields.file.fileName}
                />
                <span>{project.fields.projectTitle}</span>
              </Item>
            </Link>
          ))}
      </Container>
    </>
  );
};

const Container = styled.section`
  margin-top: 120px;
  padding: var(--primary-padding);
  display: flex;
  flex-wrap: wrap;

  a {
    width: calc(100% / 2);
    padding: 10px;
    height: 300px;

    &:nth-child(5n + 0),
    &:nth-child(5n-1),
    &:nth-child(5n-2) {
      width: calc(100% / 3);
    }
  }

  @media (max-width: 1024px) {
    a {
      &:nth-child(5n + 0),
      &:nth-child(5n-1),
      &:nth-child(5n-2) {
        width: calc(100% / 2);
      }
    }
  }

  @media (max-width: 600px) {
    a {
      width: 100%;
      &:nth-child(5n + 0),
      &:nth-child(5n-1),
      &:nth-child(5n-2) {
        width: 100%;
      }
    }
  }
  @media (max-width: 320px) {
    a {
      height: 250px;
    }
  }
`;

const VerText = styled.p`
  font-size: 12px;
  line-height: var(--secondary-line-height);
  letter-spacing: var(--primary-letter-spacing);
  font-weight: 100;
  text-transform: uppercase;
  position: fixed;
  left: 15px;
  bottom: 10px;
  transform: rotate(-90deg);
  transform-origin: left bottom;
`;

const Item = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    opacity: 0;
    background-color: var(--primary-grey-color-2);
    transition: all 0.3s var(--primary-transition);
  }

  &:hover {
    &:before {
      opacity: 1;
    }
    span {
      opacity: 1;
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  span {
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: clamp(20px, 3vw, 44px);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    transition: all 0.3s var(--primary-transition);
    opacity: 0;
    letter-spacing: var(--secondary-letter-spacing);
  }

  @media (max-width: 768px) {
    span {
      top: 10px;
      left: 10px;
      opacity: 1;
      display: block;
    }
    &:hover {
      &:before {
        opacity: 0;
      }
      span {
        opacity: initial;
      }
    }
  }
`;

export default Projects;
