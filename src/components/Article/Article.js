import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { articleData } from '../../features/Article/articleSlice';

import Btn1 from '../UI/Btn1';

const Article = () => {
  const article = useSelector(articleData);
  const data = article.article;

  return (
    <>
      <Container>
        <h2>Articles & blog</h2>
        <ArticleShowcaseContainer>
          {data &&
            data.map((article) => (
              <ArticleItemList key={article.sys.id}>
                <Link to={`/articles/${article.sys.id}`}>
                  <ArticleImg src={article.fields.articleThumbnail.fields.file.url} alt={article.fields.articleThumbnail.fields.file.fileName} />
                </Link>
                <ContentContainer>
                  <Content>
                    <Link to={`/articles/${article.sys.id}`}>
                      <Title>
                        {article.fields.articleTitle}
                      </Title>
                    </Link>
                    <Truncate>
                      {article.fields.articleSummary}
                    </Truncate>
                  </Content>
                  <BtnContainer>
                    <Link to={`/articles/${article.sys.id}`}>
                      <Btn1>Read More</Btn1>
                    </Link>
                    <Date>16 Feb 2022</Date>
                  </BtnContainer>
                </ContentContainer>
              </ArticleItemList>
            ))}
        </ArticleShowcaseContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: var(--primary-margin);
  h2 {
    padding: var(--primary-padding);
  }
`;

const ArticleShowcaseContainer = styled.section`
  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const ArticleImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
`;

const ArticleItemList = styled.div`
  height: 420px;
  padding: 20px;
  width: calc(100% / 3);
  float: left;

  &:nth-child(5n + 0),
  &:nth-child(5n-1) {
    width: calc(100% / 2);
  }
  &:nth-child(5n + 0),
  &:nth-child(5n-1) {
    height: 520px;
    img {
      height: 300px;
    }
    & > div {
      height: calc(100% - 300px);
    }
  }

  @media (max-width: 1024px) {
    float: none;
    width: 100%;
    &:nth-child(5n + 0),
    &:nth-child(5n-1) {
      width: 100%;
    }
    &:nth-child(5n + 0),
    &:nth-child(5n-1) {
      height: 420px;
      img {
        height: 200px;
      }
      & > div {
        height: calc(100% - 200px);
      }
    }
  }
`;

const ContentContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 200px - 10px);
`;

const Content = styled.div``;

const Title = styled.h3`
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Truncate = styled.p`
  font-size: 16px;
  letter-spacing: var(--tertiery-letter-spacing);
  line-height: var(--primary-line-height);
  color: var(--primary-grey-color-1);
  font-weight: 300;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Date = styled.p`
  font-size: 14px;
  color: var(--primary-grey-color-1);
  font-weight: 100;
`;

export default Article;
