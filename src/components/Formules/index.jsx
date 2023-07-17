import styled from "styled-components";
import { useTheme } from "../../utils/hooks";

const StyledH2 = styled.h2`
  margin-bottom: 1vh;
  color: ${({ theme }) => (theme === "light" ? "black" : "#fffcf1")};
`;

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
  transition: 0.5s ease;
  padding: 0 1vw 3vh 1vw;
  background-color: ${({ theme }) =>
    theme === "light" ? "transparent" : "#29282b"};

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
  color: ${({ theme }) => (theme === "light" ? "black" : "#fffcf1")};
  transition: 0.5s ease;
`;

const ArticlePrice = styled(ArticleP)`
  font-size: 1.2rem;
  margin-top: 2vh;
  margin-bottom: 1vh;
`;

function Formules({ title, description1, description2, price }) {
  const { theme } = useTheme();
  return (
    <StyledArticle theme={theme}>
      <StyledH2 theme={theme}>{title}</StyledH2>
      <ArticleP theme={theme}>{description1}</ArticleP>
      <ArticleP theme={theme}>{description2}</ArticleP>
      <ArticlePrice theme={theme}>{price} €</ArticlePrice>
    </StyledArticle>
  );
}

export default Formules;
