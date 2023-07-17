import logo from "../../assets/logo.svg";
import styled from "styled-components";
import { useTheme } from "../../utils/hooks";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 3vw;
  align-items: center;
`;

const StyledLink = styled.a`
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "grey" : "#fffcf1")};
  transition: 0.5s;

  &:active {
    color: ${({ theme }) => (theme === "light" ? "black" : "grey")};
  }

  &:hover {
    color: ${({ theme }) => (theme === "light" ? "black" : "grey")};
  }
`;

const SpanStyled = styled.span`
  color: grey;
  transition: 0.5s ease;

  &:hover {
    color: #ff8c00;
  }
`;

const InputStyled = styled.input`
  cursor: pointer;
  display: none;

  &:checked + label ${SpanStyled} {
    color: #ff8c00;
  }
`;

const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 20%;
`;

function Navigation() {
  const { toggleTheme, theme } = useTheme();
  return (
    <StyledNav>
      <div className="logo">
        <StyledLink href={""}>
          <img
            src={logo}
            alt={"Logo O' Flagrant Délice"}
            width="64px"
            height="64px"
          />
        </StyledLink>
      </div>
      <div className="menu">
        <StyledUl>
          <li>
            <StyledLink theme={theme} href={"/#menu"}>
              Menu
            </StyledLink>
          </li>
          <li>
            <StyledLink theme={theme} href={"/#location"}>
              Emplacement
            </StyledLink>
          </li>
          <li>
            <StyledLink theme={theme} href={"/#contact"}>
              Contact
            </StyledLink>
          </li>
          <li>
            <InputStyled
              type="checkbox"
              id="theme"
              onChange={() => toggleTheme()}
            />
            <LabelStyled htmlFor="theme">
              <SpanStyled className="material-symbols-outlined">
                done
              </SpanStyled>
            </LabelStyled>
          </li>
        </StyledUl>
      </div>
    </StyledNav>
  );
}

export default Navigation;
