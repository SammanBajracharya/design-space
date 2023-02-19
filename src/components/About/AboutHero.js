import styled from 'styled-components';

const AboutHero = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Meet Our Team</h1>
        <Img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
          alt="Team"
        />
        <Content>
          Design Space was founded with the goal of making a positive impact on
          the built environment. We believe that architecture is not just about
          creating buildings, but about shaping our communities and improving
          people's lives. Our team of experienced architects has a diverse range
          of skills and expertise, allowing us to approach each project with a
          unique perspective. From concept to completion, we work closely with
          our clients to understand their needs and bring their vision to life.
        </Content>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  margin-top: var(--primary-margin);
  padding-left: 20px;
  @media (max-width: 548px) {
    padding: var(--primary-padding);
  }
`;

const Wrapper = styled.div`
  position: relative;
  h1 {
    position: absolute;
    top: 0;
    left: 0;
  }
  @media (max-width: 548px) {
    h1 {
      text-align: center;
      font-size: 11.5vw;
      top: -5vw;
      right: 0;
    }
  }
`;

const Img = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  padding-left: 200px;

  @media (max-width: 768px) {
    padding-left: 100px;
  }
  @media (max-width: 548px) {
    padding-left: 0;
  }
`;

const Content = styled.p`
  color: var(--primary-grey-color-1);
  font-size: var(--description-font-size);
  line-height: var(--primary-line-height);
  letter-spacing: var(--secondary-letter-spacing);
  width: 100%;
  padding: 20px;
  padding-left: 0;

  @media (max-width: 548px) {
    padding: 20px 0;
  }
`;

export default AboutHero;
