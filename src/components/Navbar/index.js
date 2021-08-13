import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = (props) => {
  const toggle = props.toggle;
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">TheDopeGuys</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="portfolio">Portfolio</NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks to="signup">Newsletter</NavLinks>
            </NavItem> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/contact">Contact Us</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
