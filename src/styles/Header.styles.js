import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyles = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${(props) => (props.showMenu ? "50vh" : "80px")};
  background-image: linear-gradient(
    to right,
    rgba(0, 128, 55, 0),
    rgba(0, 128, 55, 1)
  );
  margin-top: 15px;

  @media (min-width: 700px) {
    height: 100px;
  }
`;

export const LeftContainer = styled.div`
  flex: 20%;
  display: flex;
  align-items: center;
`;

export const RightContainer = styled.div`
  flex: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  color: #ff914d;
  font-size: large;
  font-weight: 600;
  text-decoration: none;
  margin: 15px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  color: #ff914d;
  font-size: large;
  font-weight: 600;
  text-decoration: none;
  margin: 15px;
`;

export const Logo = styled.img`
  margin-top: 10px;
  width: 160px;
  height: 160px;
`;

export const MenuButton = styled.button`
  width: 80px;
  height: 60px;
  background: none;
  border: none;
  color: #ff914d;
  font-size: 50px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;
export const ExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;
