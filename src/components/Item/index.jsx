import styled from "styled-components";
import { Buttons } from "../Header";
import { Link } from "react-router-dom";
import { useTheme } from "../../utils/hooks";

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  border-radius: 2vw;
  margin-bottom: 20%;
  transition: 0.5s ease;
  padding: 0 1vw 3vh 1vw;
  background-color: ${({ theme }) =>
    theme === "light" ? "transparent" : "#29282b"};
  &:hover {
    transform: scale(1.05);
  }
`;

const ImgDiv = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -6vw;
`;

const StyledImg = styled.img`
  width: 14vw;
  aspect-ratio: 4/3;
  object-fit: contain;
`;

const StyledH2 = styled.h2`
  margin-top: 6vw;
  margin-bottom: 1vh;
  color: ${({ theme }) => (theme === "light" ? "black" : "#fffcf1")};
`;

const StyledP = styled.p`
  margin-top: 0;
  margin-bottom: 2vh;
  text-align: center;
  color: ${({ theme }) => (theme === "light" ? "black" : "#fffcf1")};
`;

const StyledPDesc = styled(StyledP)`
  color: grey;
`;

const ButtonStyle = styled(Buttons)`
  &:hover {
    color: white;
    background-color: orange;
    border: 0.2vh solid transparent;
  }
`;

function Item({ title, description, price, image }) {
  const { theme } = useTheme();
  return (
    <StyledArticle theme={theme}>
      <ImgDiv>
        <StyledImg src={image} alt={title} />
      </ImgDiv>
      <StyledH2 theme={theme}>{title}</StyledH2>
      <StyledPDesc>{description}</StyledPDesc>
      <StyledP theme={theme}>{price} €</StyledP>
      <Link to={""}>
        <ButtonStyle theme={theme}>En savoir plus</ButtonStyle>
      </Link>
    </StyledArticle>
  );
}

export default Item;
