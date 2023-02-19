import React from 'react';
import styled from 'styled-components';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

import { SlickArrow } from '../UI/SlideArrow';
import Btn2 from '../UI/Btn2';
import { Link } from 'react-router-dom';

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <SlickNext onClick={onClick}>
      <WestIcon />
    </SlickNext>
  );
};

const SlickNext = styled(SlickArrow)`
  left: calc(var(--slide-arrow-size)/2 * -1);
  display: flex;
  align-items: center;
  justify-content: right;
`;

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <SlickPrev onClick={onClick}>
      <EastIcon />
    </SlickPrev>
  );
};

const SlickPrev = styled(SlickArrow)`
  right: calc(var(--slide-arrow-size)/2 * -1);
  display: flex;
  align-items: center;  
  justify-content: left;
`;

const HomeSlider = ({ projectData }) => {
  var settings = {
    dots: true,
    customPaging: function (i) {
      return <div>{(i + 1).toString().padStart(2, "0")}</div>;
    },
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Container>
      <Carousel {...settings}>
        {projectData && projectData.slice(0, 3).map((data) => (
          <Wrap>
            <Img src={data.fields && data.fields.projectThumbnail.fields.file.url} alt={data.fields && data.fields.projectThumbnail.fields.title} />
            <ContentContainer>
              <Content>
                <LeftContent>
                  <p>
                    {data.fields && data.fields.projectTitle} ---<br></br>
                    {data.fields && data.fields.location} ---<br></br>
                  </p>
                </LeftContent>
                <RightContent>
                  <Link to='/projects'>
                    <Btn2>Explore</Btn2>
                  </Link>
                </RightContent>
              </Content>
            </ContentContainer>
          </Wrap>
        ))}
      </Carousel>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  overflow-x: hidden;
`;

const Carousel = styled(Slider)`
  position: relative;
  .slick-dots {
    position: absolute;
    z-index: 0;
    top: var(--top-bottom);
    bottom: 100%;
    left: var(--left-right);
    text-align: left;

    li {
      color: var(--primary-grey-color-1);
    }

    .slick-active {
      color: var(--clr-white);
    }
  }
`;

const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 2;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  object-fit: cover;
  z-index: -1;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  margin: 0 var(--left-right) var(--top-bottom) var(--left-right);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 548px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LeftContent = styled.div`
  p {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: var(--primary-letter-spacing);
    font-weight: 300;
    line-height: var(--primary-line-height);
  }
`;
const RightContent = styled.div``;

export default HomeSlider;
