import React, { useEffect, useRef } from "react";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const headerRef = useRef();
  useEffect(() => {
    const navBar = headerRef.current;
    addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navBar.style.background = "#000000d9";
        navBar.style.height = "100px";
      } else {
        navBar.style.background = "transparent";
        navBar.style.height = "120px";
      }
    });
  }, []);
  return (
    <>
      <Navbar ref={headerRef} className="fixed-top" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            Getly
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FaBars />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" id="active">
                Home
              </Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Services</Nav.Link>
              <Nav.Link href="#link">Skills</Nav.Link>
              <Nav.Link href="#link">Projects</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
