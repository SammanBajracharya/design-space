import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SlickArrow } from '../UI/SlickArrow';
import { useInView } from 'react-intersection-observer';

const ArticleSlider = ({ articleData }) => {
  const { ref, imgIsVisible } = useInView();

  const sliderRef = useRef();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <Container>
      <ArticleSummary>
        <Summary>
          <p>{articleData.fields && articleData.fields.articleSummary}</p>
          <Btns>
            <ArrowButton className="prev" onClick={previousSlide}>
              <span>prev</span>
            </ArrowButton>
            <ArrowButton className="next" onClick={nextSlide}>
              <span>next</span>
            </ArrowButton>
          </Btns>
        </Summary>
        <Carousel ref={sliderRef} {...settings}>
          {articleData.fields &&
            articleData.fields.articleImages.map((images) => (
              <Wrap ref={ref}>
                <img
                  isVisible={imgIsVisible}
                  src={images.fields && images.fields.file.url}
                  alt={images.fields && images.fields.title}
                />
              </Wrap>
            ))}
        </Carousel>
      </ArticleSummary>
    </Container>
  );
};

const Container = styled.div``;

const Btns = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ArrowButton = styled(SlickArrow)``;

const ArticleSummary = styled.div`
  border-top: 1px solid var(--primary-grey-color-1);
  border-bottom: 1px solid var(--primary-grey-color-1);
  height: 80vh;
  margin: 32px 0;
  display: flex;

  @media (max-width: 768px) {
    height: 100%;
    flex-direction: column;
    padding: 20px;
  }
`;

const Summary = styled.div`
  width: 60%;
  border-right: 1px solid var(--primary-grey-color-1);
  padding: 20px;

  p {
    font-size: 20px;
    letter-spacing: var(--tertiary-letter-spacing);
    line-height: var(--primary-line-height);
    margin-bottom: 20px;
  }

  @media (max-width: 950px) {
    p {
      font-size: var(--description-font-size);
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--primary-grey-color-1);
  }
`;

const Carousel = styled(Slider)`
  padding: 20px;
  width: 40%;
  height: 70vh;

  .slick-arrow {
    position: absolute;
    bottom: 0;
    left: -10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 80vh;
    padding: 20px 0;
  }
`;

const Wrap = styled.div`
  height: 70vh;
  width: 100%;

  img {
    width: 100%;
    transition: 0.2s height 0.3s ease;
    height: ${(props) => (props.isVisible ? '0%' : '100%')};
    object-fit: cover;
  }
`;

export default ArticleSlider;
