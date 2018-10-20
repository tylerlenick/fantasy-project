import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import SignupModal from "../SignupModal";
import LoginModal from "../LoginModal";

const NavTop = props => (
  <Navbar>
    <Navbar.Header>
      <div className="navbar-brand">
        Fantasy Scraper
      </div>
    </Navbar.Header>
    <Nav pullRight>
      <NavItem eventKey={1}>
        Sign Up
      </NavItem>
      <NavItem eventKey={2} onClick={() => {props.handleShow()}}>
        Login
      </NavItem>
    </Nav>

  </Navbar>
);

export default NavTop;
