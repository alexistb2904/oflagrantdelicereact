import { Link } from "react-router-dom";
import styled from "styled-components";

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
  color: #000000;
  margin-bottom: 2vh;
  margin-top: 2vh;
`;

const PStyled = styled.p`
  font-size: 3rem;
  font-weight: 400;
  margin-top: 0;
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
  color: grey;
  background-color: transparent;
  border: 0.2vh solid grey;
  padding: 1.5vh 3vw;
  border-radius: 2vw;
  cursor: pointer;
  transition: 0.5s;
`;

const ButtonDiv = styled.div`
  display: flex;
  gap: 1vw;
`;

const MenuButton = styled(Buttons)`
  color: white;
  background-color: orange;
  border: none;
  &:hover {
    background-color: darkorange;
  }
`;

const OnPlaceButton = styled(Buttons)`
  &:hover {
    color: darkgray;
    border: 0.2vh solid darkgrey;
  }
`;

function Header() {
  return (
    <header>
      <BaseContainer>
        <Content>
          <H1Styled>O' Flagrant Délice</H1Styled>
          <PStyled>
            Des Pizza Qui Sauront Satisfaire <SpanStyled>Toutes</SpanStyled> Vos
            Envies
          </PStyled>
          <ButtonDiv>
            <Link to={"/#menu"}>
              <MenuButton id="menu-button">Voir le menu</MenuButton>
            </Link>
            <Link to={"/#location"}>
              <OnPlaceButton id="onplace-button">Venir sur place</OnPlaceButton>
            </Link>
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
