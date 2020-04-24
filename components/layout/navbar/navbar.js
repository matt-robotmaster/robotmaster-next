import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import { withTranslation } from 'next-i18next';

const navbar = ({ t }) => {
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
              <Nav.Link href="/about">{t('about-page-caption')}</Nav.Link>
              <Nav.Link href="/products">{t('products-page-caption')}</Nav.Link>
              <Nav.Link href="/applications">{t('application-page-caption')}</Nav.Link>
              <Nav.Link href="/why-robotmaster">{t('why-page-caption')}</Nav.Link>
              <Nav.Link href="/success-stories">{t('success-page-caption')}</Nav.Link>
              <Nav.Link href="/partners">{t('partners-page-caption')}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
  );
};

navbar.getInitialProps = async () => {
  return { namespacesRequired: ['common'] };
}

export default withTranslation('common')(navbar);