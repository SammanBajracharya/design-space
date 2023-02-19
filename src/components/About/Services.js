import styled from 'styled-components';

const Services = () => {
  return (
    <Container>
      <Img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt="sadf"
      />
      <ContentContainer>
        <Wrap>
          <Exp>
            <h1>8+</h1>
            <p>Year Experience</p>
          </Exp>
          <Project>
            <h1>100+</h1>
            <p>Refrence Projects</p>
          </Project>
        </Wrap>
        <Service>
          <h2>Services</h2>
          <p>
            Design Space offers a comprehensive range of architectural services
            to meet the unique needs of each of our clients. Our team of experts
            is dedicated to delivering innovative, sustainable, and functional
            design solutions that transform spaces into inspiring environments.
            <br></br>
            <br></br>
            Our team of architects will work with you to create a design that
            meets your specific needs and exceeds your expectations. We take a
            collaborative approach, ensuring that your vision is brought to life
            through thoughtful design.
          </p>
        </Service>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: var(--primary-padding);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Img = styled.img`
  width: 50%;
  height: 80vh;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: 100%;
    height: 65vh;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 548px) {
    flex-direction: column;
  }
`;

const Wrap = styled.div`
  p {
    font-size: 18px;
    color: var(--primary-grey-color-1);
    text-transform: capitalize;
    font-variant: small-caps;
  }
`;

const Exp = styled.div``;

const Project = styled.div``;

const Service = styled.div`
  p {
    font-size: var(--description-font-size);
    color: var(--primary-grey-color-1);
    line-height: var(--primary-line-height);
  }
`;

export default Services;
