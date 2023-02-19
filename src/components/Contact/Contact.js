import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <ContactContainer>
        <h3>Get in Touch!</h3>
        <ContactDetails>
          <div>
            <LocationOnIcon />
            <p>Reynolds Street, Key West</p>
          </div>
          <div>
            <LocalPhoneIcon />
            <p>+1 555 1212</p>
          </div>
          <div>
            <EmailIcon />
            <p>hello@design_space.com</p>
          </div>
        </ContactDetails>
        <ContactForm
          action="https://formsubmit.co/sammanbajrachraya@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <h2>Let's talk and make something awesome</h2>
          <ContactInput>
            <ContactInfo>
              <Input>
                <label>Your Name</label>
                <div>
                  <PersonIcon />
                  <input
                    type="text"
                    required
                    placeholder="John"
                  />
                </div>
              </Input>
              <Input>
                <label>Mail</label>
                <div>
                  <EmailIcon />
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                  />
                </div>
              </Input>
              <Input>
                <label>Phone</label>
                <div>
                  <LocalPhoneIcon />
                  <input
                    type="tel"
                  />
                </div>
              </Input>
            </ContactInfo>
            <UserMessage>
              <label>Message</label>
              <textarea
                name="message"
                id="message"
                required
              />
            </UserMessage>
          </ContactInput>
          <ContactBtn type="submit">Send Message</ContactBtn>
        </ContactForm>
      </ContactContainer>
    </Container>
  );
};

const Container = styled.section`
  padding: var(--primary-padding);
  padding-top: var(--primary-margin);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: no-repeat center / cover url('/images/contactPageBg.jpg');
  position: relative;
  &:before {
    backdrop-filter: blur(3px);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(69, 182, 254, 0.2);
    background-blend-mode: multiply;
    z-index: 0;
  }
`;

const ContactContainer = styled.div`
  width: 550px;
  position: relative;
  z-index: 2;
  text-align: center;
  h3 {
    text-transform: none;
    font-weight: 700;
  }
`;

const ContactDetails = styled.div`
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding: 15px;
    border-radius: 6px;
    transition: all 0.3s ease;

    p {
      font-size: 12px;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`;

const ContactForm = styled.form`
  padding: 24px 20px;
  background: var(--clr-white);
  border-radius: 6px;
  width: 100%;
  color: var(--clr-black);
  display: flex;
  flex-direction: column;
  gap: 24px;

  h2 {
    text-transform: none;
    font-size: 24px;
  }
`;

const ContactInput = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px;
    width: 100%;
    border-radius: 6px;
    height: 30px;
    border: 1px solid rgba(0, 0, 0, 20%);

    svg {
      color: rgba(0, 0, 0, 0.2);
    }

    input {
      border: none;
      outline: none;
      height: 100%;
      width: 100%;
    }

    &:focus-within {
      border-color: rgba(0, 0, 0, 50%);

      svg {
        color: rgba(0, 0, 0, 50%);
      }
    }
  }
`;

const UserMessage = styled(Input)`
  textarea {
    border-radius: 6px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 20%);
    padding: 4px;
    width: 100%;
    resize: none;
    background: rgba(217, 217, 217, 30%);
    height: 100%;
    &:focus {
      border-color: rgba(0, 0, 0, 50%);
    }
  }
`;

const ContactBtn = styled.button`
  margin: 0 auto;
  width: 140px;
  background: none;
  font-size: 14px;
  padding: 6px 20px;
  color: var(--clr-black);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s var(--primary-transition);

  &:hover {
    background: rgba(69, 182, 254);
  }
`;

export default Contact;
