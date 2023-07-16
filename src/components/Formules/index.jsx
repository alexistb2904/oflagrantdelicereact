import styled from "styled-components";

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  border-radius: 2vw;
  margin-bottom: 5%;
  transition: 0.5s;
  padding: 0 1vw 3vh 1vw;

  &:last-of-type {
    grid-row-start: 2;
    grid-column-start: 2;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const ArticleP = styled.p`
  margin-top: 1vh;
  margin-bottom: 0;
  text-align: center;
`;

const ArticlePrice = styled(ArticleP)`
  font-size: 1.2rem;
  margin-top: 2vh;
  margin-bottom: 1vh;
`;

function Formules({ title, description1, description2, price }) {
  return (
    <StyledArticle>
      <h2>{title}</h2>
      <ArticleP>{description1}</ArticleP>
      <ArticleP>{description2}</ArticleP>
      <ArticlePrice>{price} €</ArticlePrice>
    </StyledArticle>
  );
}

export default Formules;
