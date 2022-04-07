import logoImg from "../img/Logopng.png";
import { useState } from "react";

import {
  HeaderStyles,
  LeftContainer,
  RightContainer,
  InnerContainer,
  ExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  MenuButton,
  NavbarLinkExtended
} from "../styles/Header.styles";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <HeaderStyles showMenu={showMenu}>
      <InnerContainer>
        <LeftContainer>
          <Logo src={logoImg} alt="logo" />
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">HOME</NavbarLink>
            <NavbarLink to="/projects">PROJECTEN</NavbarLink>
            <NavbarLink to="/contact">CONTACT</NavbarLink>
            <NavbarLink to="/about">OVER MIJ</NavbarLink>
            <MenuButton
              onClick={() => {
                setShowMenu((currentValue) => !currentValue);
              }}
            >
              {showMenu ? <>&#10005;</> : <>&#8801;</>}
            </MenuButton>
          </NavbarLinkContainer>
        </RightContainer>
      </InnerContainer>
      {showMenu && (<ExtendedContainer>
        <NavbarLinkExtended to="/">HOME</NavbarLinkExtended>
        <NavbarLinkExtended to="/projects">PROJECTEN</NavbarLinkExtended>
        <NavbarLinkExtended to="/contact">CONTACT</NavbarLinkExtended>
        <NavbarLinkExtended to="/about">OVER MIJ</NavbarLinkExtended>
      </ExtendedContainer>)}
    </HeaderStyles>
  );
};
export default Header;
