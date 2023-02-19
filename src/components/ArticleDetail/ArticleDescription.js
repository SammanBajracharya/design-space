import styled from 'styled-components';

const ArticleDescription = ({ articleData }) => {
  return (
    <Container>
      <Wrapper>
        <Content>
          {articleData.fields && articleData.fields.articleDescription}
        </Content>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 32px;
  padding: var(--primary-padding);
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 548px;
  text-align: center;
`;

const Content = styled.div`
  font-size: var(--description-font-size);
  line-height: var(--primary-line-height);
  letter-spacing: var(--tertiary-letter-spacing);

  @media (max-width: 548px) {
    text-align: left;
  }
`;

export default ArticleDescription;
