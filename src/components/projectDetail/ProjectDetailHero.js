import styled from 'styled-components';

const ProjectDetailHero = ({ data }) => {
  return (
    <>
      { }
      <Container>
        <VerText>Build your dream home ----</VerText>
        <h1>{data.fields && data.fields.projectTitle}</h1>
        <ContentWrapper>
          <Content>{data.fields && data.fields.projectSummary}</Content>
          <Img
            src={data.fields && data.fields.projectThumbnail.fields.file.url}
            alt={
              data.fields && data.fields.projectThumbnail.fields.file.fileName
            }
          />
        </ContentWrapper>
      </Container>
    </>
  );
};

const Container = styled.section`
  margin-top: var(--primary-margin);
  padding-left: 20px;

  @media (max-width: 768px) {
    padding: var(--primary-padding);
  }

  @media (max-width: 548px) {
    h1 {
      font-size: 11vw;
    }
  }
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

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const Content = styled.div`
  text-align: right;
  font-size: var(--description-font-size);
  font-weight: 400;
  line-height: var(--primary-line-height);
  letter-spacing: var(--secondary-padding);
  transition: all 0.3s ease;
  width: 40%;

  @media (max-width: 1024px) {
    text-align: right;
    line-height: var(--primary-line-height);
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

const Img = styled.img`
  height: 65vh;
  width: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
  outline: none;
  border: none;

  @media (max-width: 1130px) {
    height: 50vh;
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 548px) {
    height: 45vh;
  }
  @media (max-width: 320px) {
    height: 30vh;
  }
`;

export default ProjectDetailHero;
