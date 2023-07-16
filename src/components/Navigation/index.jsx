import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 3vw;
`

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  color: grey;
  
  &:active {
    color:black;
    transition: 0.5s;
  }
  
  &:hover {
    color:black;
    transition: 0.5s;
  }
`

function Navigation() {
  return (
      <StyledNav>
        <div className="logo">
          <StyledLink to={''}><img src={logo} alt={"Logo O' Flagrant Délice"} width="64px" height="64px"/></StyledLink>
        </div>
        <div className="menu">
          <StyledUl>
            <li><StyledLink to={'/#menu'}>Menu</StyledLink></li>
            <li><StyledLink to={'/#location'}>Emplacement</StyledLink></li>
            <li><StyledLink to={'/#contact'}>Contact</StyledLink></li>
          </StyledUl>
        </div>
      </StyledNav>
  );
}

export default Navigation;
