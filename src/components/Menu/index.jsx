import styled from "styled-components";
import { Buttons } from "../Header";
import Item from "../Item";
import Formules from "../Formules";
import menulist from "../../data/menulist.json";
import { useTheme } from "../../utils/hooks";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
`;

export const H1Styled = styled.h1`
  color: ${({ theme }) => (theme === "light" ? "black" : "#fffcf1")};
  font-family: "Poppins", sans-serif;
  font-variant: all-small-caps;
  text-align: center;
  font-weight: 600;
  font-size: 3rem;
  transition: 0.5s ease;
`;

const MenuButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vw;
  margin-top: 5vh;
`;

const MenuButton = styled(Buttons)`
  &:hover {
    color: white;
    background-color: orange;
    border: 0.2vh solid transparent;
  }
`;

const GridMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2vw;
  position: relative;
  margin-top: 18vh;
`;

const FormuleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2vw;
  position: relative;
`;

const pizzas = menulist.category[0].pizza;
const entrees = menulist.category[0].entree;
const formules = menulist.category[0].formules;
function Menu() {
  const { theme } = useTheme();
  return (
    <section id="menu">
      <Container>
        <H1Styled theme={theme}>Notre Menu</H1Styled>
        <MenuButtons>
          <a href="#pizza">
            <MenuButton theme={theme}>Pizza</MenuButton>
          </a>
          <a href="#entree">
            <MenuButton theme={theme}>Entrée</MenuButton>
          </a>
          <a href="#formules">
            <MenuButton theme={theme}>Formules</MenuButton>
          </a>
        </MenuButtons>
        <div>
          <GridMenu id="pizza">
            {pizzas.map((pizza, index) => (
              <Item
                key={`${pizza.title}-${index}`}
                title={pizza.title}
                description={pizza.description}
                price={pizza.price}
                image={pizza.image}
              />
            ))}
          </GridMenu>
          <GridMenu id="entree">
            {entrees.map((entree, index) => (
              <Item
                key={`${entree.title}-${index}`}
                title={entree.title}
                description={entree.description}
                price={entree.price}
                image={entree.image}
              />
            ))}
          </GridMenu>
        </div>
      </Container>
      <Container>
        <H1Styled theme={theme}>Nos Formules</H1Styled>
        <FormuleGrid id="formules">
          {formules.map((formule, index) => (
            <Formules
              key={`${formule.title}-${index}`}
              title={formule.title}
              description1={formule.description1}
              description2={formule.description2}
              price={formule.price}
            />
          ))}
        </FormuleGrid>
      </Container>
    </section>
  );
}

export default Menu;
