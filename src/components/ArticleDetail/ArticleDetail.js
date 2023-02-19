import { useEffect, useState } from 'react';
import ArticleSlider from './ArticleSlider';
import ArticleDescription from './ArticleDescription';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { client } from '../../client';

const ArticleDetail = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    client
      .getEntry(id)
      .then((data) => setDetail(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <Container>
        <h2>{detail.fields && detail.fields.articleTitle}</h2>
        <ArticleThumbnail
          src={detail.fields && detail.fields.articleThumbnail.fields.file.url}
          alt={detail.fields && detail.fields.articleThumbnail.fields.title}
        />
        <ArticleSlider articleData={detail} />
        <ArticleThumbnail
          src={detail.fields && detail.fields.articleDescriptionImage.fields.file.url}
          alt={detail.fields && detail.fields.articleDescriptionImage.fields.title}
        />
        <ArticleDescription articleData={detail} />
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: var(--primary-margin);

  h2 {
    text-align: center;
    width: 60%;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    h2 {
      width: 80%;
    }
  }
  @media (max-width: 548px) {
    h2 {
      width: 95%;
    }
  }
`;

const ArticleThumbnail = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  position: relative;
`;

export default ArticleDetail;
