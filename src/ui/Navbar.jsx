import { NavLink } from "react-router-dom";
import styled from "styled-components";

const blueShade1 = "#42A5F5";
const blueShade2 = "#1E88E5";
const blueShade3 = "#1565C0";

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: ${blueShade2};
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
    @media (max-width: 700px) {
      font-size: 1.4rem;
    }
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: ${blueShade3};
    background-color: ${blueShade1};
    border-radius: 10px;
  }

  & span {
    color: ${blueShade1};
    transition: all 0.3s;
    @media (max-width: 700px) {
      width: 2rem;
    }
  }

  &:hover span,
  &:active span,
  &.active:link span,
  &.active:visited span {
    color: ${blueShade3};
    @media (max-width: 700px) {
      width: 2rem;
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  justify-content: space-around;
  padding: 1rem;
`;

function Navbar() {
  return (
    <NavList>
      <StyledNavLink to="/Daily">
        <span>Dzień</span>
      </StyledNavLink>
      <StyledNavLink to="/Weekly">
        <span>Tydzień</span>
      </StyledNavLink>
      <StyledNavLink to="/Monthly">
        <span>Miesiąc</span>
      </StyledNavLink>
    </NavList>
  );
}

export default Navbar;
