import styled from "styled-components";
import { useTheme } from "../../utils/hooks";

const BaseContainer = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 4vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 2vw;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) =>
    theme === "light" ? "transparent" : "#29282b"};
  transition: 0.5s ease;
`;

const Content = styled.div`
  padding: 5vw;
  width: 50vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImgStyled = styled.img`
  width: 50%;
  height: 50%;
  position: relative;
  right: -7vw;
  bottom: -12vh;
`;

const H1Styled = styled.h1`
  font-size: 5rem;
  font-weight: 600;
  color: ${({ theme }) => (theme === "light" ? "black" : "#fffcf1")};
  margin-bottom: 2vh;
  margin-top: 2vh;
  transition: 0.5s ease;
`;

const PStyled = styled.p`
  font-size: 3rem;
  font-weight: 400;
  margin-top: 0;
  transition: 0.5s ease;
  color: ${({ theme }) => (theme === "light" ? "black" : "#fffcf1")};
`;

const SpanStyled = styled.span`
  color: orange;
  font-weight: 600;
`;

export const Buttons = styled.button`
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "grey" : "#fffcf1")};
  background-color: transparent;
  border: 0.2vh solid ${({ theme }) => (theme === "light" ? "grey" : "#fffcf1")};
  padding: 1.5vh 3vw;
  border-radius: 2vw;
  cursor: pointer;
  transition: 0.5s ease;
`;

const ButtonDiv = styled.div`
  display: flex;
  gap: 1vw;
`;

const MenuButton = styled(Buttons)`
  color: #fffcf1;
  background-color: orange;
  border: none;
  &:hover {
    background-color: darkorange;
  }
`;

const OnPlaceButton = styled(Buttons)`
  &:hover {
    color: ${({ theme }) => (theme === "light" ? "darkgrey" : "grey")};
    border: 0.2vh solid
      ${({ theme }) => (theme === "light" ? "darkgrey" : "grey")};
  }
`;

function Header() {
  const { theme } = useTheme();
  return (
    <header>
      <BaseContainer theme={theme}>
        <Content>
          <H1Styled theme={theme}>O' Flagrant Délice</H1Styled>
          <PStyled theme={theme}>
            Des Pizza Qui Sauront Satisfaire <SpanStyled>Toutes</SpanStyled> Vos
            Envies
          </PStyled>
          <ButtonDiv>
            <a href={"#menu"}>
              <MenuButton id="menu-button">Voir le menu</MenuButton>
            </a>
            <a href={"#location"}>
              <OnPlaceButton theme={theme} id="onplace-button">
                Venir sur place
              </OnPlaceButton>
            </a>
          </ButtonDiv>
        </Content>
        <ImgStyled
          src="https://static.vecteezy.com/system/resources/previews/009/385/555/large_2x/fresh-pizza-and-pizza-box-clipart-design-illustration-free-png.png"
          alt="Pizza"
        />
      </BaseContainer>
    </header>
  );
}

export default Header;
