import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  background: #282c34;
  color: white;
  padding: 0 20px;
  position: relative;
  z-index: 1000;
`;

const Logo = styled.h3`
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  list-style: none;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 70%;
    height: 100vh;
    background: #282c34;
    flex-direction: column;
    justify-content: center;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
    z-index: 999;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  }
`;

const NavLinkItem = styled.li`
  margin: 0 10px;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: #61dafb;
  }

  /* Highlight active link */
  &.active {
    color: #61dafb;
    font-weight: bold;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #61dafb;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // Get current location

  // Disable scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <Nav>
        <Logo>Sunil Kumar</Logo>

        <Hamburger onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </Hamburger>

        <NavLinks open={open}>
          <NavLinkItem>
            <StyledLink
              to="/about"
              onClick={() => setOpen(false)}
              className={location.pathname === "/" || location.pathname === "/about" ? "active" : ""}
            >
              About
            </StyledLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledLink
              to="/skills"
              onClick={() => setOpen(false)}
              className={location.pathname === "/skills" ? "active" : ""}
            >
              Skills
            </StyledLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledLink
              to="/projects"
              onClick={() => setOpen(false)}
              className={location.pathname === "/projects" ? "active" : ""}
            >
              Projects
            </StyledLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </StyledLink>
          </NavLinkItem>
        </NavLinks>
      </Nav>

      {/* Overlay to disable scrolling on background */}
      <Overlay open={open} onClick={() => setOpen(false)} />
    </>
  );
};

export default Navbar;