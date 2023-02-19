import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState, useEffect } from 'react';

const Header = () => {
  const [menuShown, setMenuShown] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container scroll={scrollPosition}>
      <Wrapper>
        <Link to="/">
          <Brand src="/images/Logo.svg" alt="Design Space" />
        </Link>
        <NavLinks show={menuShown}>
          <Nav
            to="/"
            show={menuShown}
            onClick={() => {
              setMenuShown(false);
            }}
          >
            Home
          </Nav>
          <Nav
            to="/projects"
            show={menuShown}
            onClick={() => {
              setMenuShown(false);
            }}
          >
            Projects
          </Nav>
          <Nav
            to="/articles"
            show={menuShown}
            onClick={() => {
              setMenuShown(false);
            }}
          >
            Article
          </Nav>
          <Nav
            to="/about"
            show={menuShown}
            onClick={() => {
              setMenuShown(false);
            }}
          >
            About
          </Nav>
          <Nav
            to="/contact"
            show={menuShown}
            onClick={() => {
              setMenuShown(false);
            }}
          >
            Contact
          </Nav>
        </NavLinks>
        <HorLine />
        <Menu
          onClick={() => {
            setMenuShown(!menuShown);
          }}
        >
          <MoreHorizIcon />
        </Menu>
      </Wrapper>
    </Container>
  );
};

const Container = styled.header`
  width: 100vw;
  padding-left: 20px;
  height: ${(props) => (props.scroll ? '40px' : '50px')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  background-color: ${(props) =>
    props.scroll ? 'var(--background)' : 'transparent'};
  transition: height 0.3s var(--primary-transition),
    background-color 0.3s var(--primary-transition);

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    z-index: 600;
    background-color: #fff;
    transition: transform 0.5s ease;
    transform: ${(props) => (props.scroll ? 'scaleX(1)' : 'scaleX(0)')};
    transform-origin: left;
  }

  @media (max-width: 1024px) {
    position: fixed;
    padding: var(--primary-padding);
    height: ${(props) => (props.scroll ? '50px' : '60px')};
  }
`;

const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.img`
  @media (max-width: 1024px) {
    position: relative;
    z-index: 999;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;

  gap: 60px;

  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    padding-top: 100px;
    background: var(--clr-black);
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 600;

    transition: transform 0.3s var(--primary-transition);
    transform: ${(props) =>
    props.show ? 'translateY(0)' : 'translateY(100%)'};
  }
`;

const Nav = styled(NavLink)`
  text-transform: uppercase;
  font-size: 14px;
  color: var(--primary-grey-color-1);
  font-weight: 500;
  letter-spacing: var(--tertiary-letter-spacing);
  transition: all 0.3s var(--primary-transition);
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    background: var(--clr-white);
    transition: all 0.3s var(--primary-transition);
  }

  &:hover,
  &.active {
    color: var(--clr-white);
    &:before {
      width: 20px;
    }
  }

  @media (max-width: 1024px) {
    color: var(--primary-grey-color-1);
    font-size: 24px;
    transition: transform 0.2s ease 0.3s, opacity 0.2s ease 0.3s;

    transform: ${(props) =>
    props.show ? 'translateY(0)' : 'translateY(15px)'};
    opacity: ${(props) => (props.show ? '1' : '0')};
  }
`;

const HorLine = styled.div`
  background: var(--clr-white);
  height: 2px;
  border-radius: var(--border-radius);
  width: 150px;
  margin-left: 15px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Menu = styled.div`
  height: 40px;
  width: 40px;
  border: 1px solid var(--clr-white);
  background: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    z-index: 999;
  }
`;

export default Header;
