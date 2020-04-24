import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";

import './navbar.css';
import {FormattedMessage} from "react-intl";

export default function () {
  return (
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">
            <div className="navbar-default">
              <a className="navbar-brand">
                <div className="logo" />
              </a>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/about"><FormattedMessage id='about-page-caption'/></Nav.Link>
              <Nav.Link href="/products"><FormattedMessage id='products-page-caption'/></Nav.Link>
              <Nav.Link href="/applications"><FormattedMessage id='application-page-caption'/></Nav.Link>
              <Nav.Link href="/why-robotmaster"><FormattedMessage id='why-page-caption'/></Nav.Link>
              <Nav.Link href="/success-stories"><FormattedMessage id='success-page-caption'/></Nav.Link>
              <Nav.Link href="/partners"><FormattedMessage id='partners-page-caption'/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
  );
}