import styled from 'styled-components';

const ProjectDescription = ({ data }) => {
  return (
    <Container>
      {data.fields && (
        <ContentContainer>
          <SubTitle>
            <p>Project</p>
            <h3>{data.fields.projectTitle}</h3>
          </SubTitle>
          {data.fields.location && (
            <SubTitle>
              <p>Location</p>
              <h3>{data.fields.location}</h3>
            </SubTitle>
          )}
          <Content>{data.fields.projectDescription}</Content>
        </ContentContainer>
      )}
      <ImgContainer>
        {data &&
          data.fields &&
          data.fields.projectImages &&
          data.fields.projectImages.map((projectImage) => (
            <Img
              key={projectImage && projectImage.sys.id}
              src={projectImage.fields && projectImage.fields.file.url}
              alt={projectImage.fields && projectImage.fields.title}
            />
          ))}
      </ImgContainer>
    </Container>
  );
};

const Container = styled.section`
  margin-top: 140px;
  height: 100%;
  position: relative;
  display: flex;
  border-top: 1px solid var(--primary-grey-color-3);
  border-bottom: 1px solid var(--primary-grey-color-3);
  @media (max-width: 548px) {
    flex-direction: column;
    padding: var(--primary-padding);
  }
`;

const ContentContainer = styled.div`
  max-width: 40%;
  padding: 20px;
  height: 100%;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    max-width: 50%;
  }
  @media (max-width: 548px) {
    position: relative;
    top: 0;
    max-width: 100%;
    height: 100%;
    border-right: none;
    border-bottom: 1px solid var(--primary-grey-color-3);
    padding: 20px 0;
  }
`;

const SubTitle = styled.div`
  p {
    letter-spacing: var(--primary-letter-spacing);
    font-size: 14px;
    color: var(--primary-grey-color-1);
    font-weight: 100;
    text-transform: uppercase;
  }

  h3 {
    letter-spacing: var(--primary-letter-spacing);
  }
`;

const Content = styled.p`
  text-align: justify;
  margin-top: 64px;
  font-weight: 300;
  font-size: var(--description-font-size);
  line-height: var(--secondary-line-height);
  letter-spacing: var(--secondary-letter-spacing);

  @media (max-width: 1024px) {
    line-height: var(--primary-line-height);
  }
  @media (max-width: 548px) {
    margin-top: 32px;
  }
`;

const ImgContainer = styled.div`
  padding: 20px 20px 0 20px;
  display: block;
  gap: 10px;
  height: 100%;
  border-left: 1px solid var(--primary-grey-color-3);
  
  @media (max-width: 850px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  @media (max-width: 548px) {
    padding: 20px 0;
    border-left: none;
  }
  @media (max-width: 950px) {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 850px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Img = styled.img`
  height: 70vh;
  width: 40%;
  float: left;
  padding-bottom: 20px;
  object-fit: cover;
  transition: height 0.3s ease;

  &:nth-child(4n-1),
  &:nth-child(4n-2) {
    width: 60%;
  }

  &:nth-child(4n-1) {
    padding-right: 20px;
  }
  &:nth-child(4n-2) {
    padding-left: 20px;
  }

  @media (max-width: 950px) {
    float: none;
    width: 100%;
    &:nth-child(4n-1),
    &:nth-child(4n-2) {
      width: 100%;
    }

    &:nth-child(4n-1) {
      padding-right: 0;
    }
    &:nth-child(4n-2) {
      padding-left: 0;
    }
  }

  @media (max-width: 950px) {
  }
  @media (max-width: 768px) {
    height: 70vh;
  }
`;

export default ProjectDescription;
