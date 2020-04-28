import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import useTranslation from '../../../hooks/useTranslation';
import classes from './navbar.module.css';

const navbar = () => {
  const { t } = useTranslation();
  return (
      <Container>
        <Navbar bg='light' expand='lg'>
          <Navbar.Brand href='/'>
            <div className={classes.navbarDefault}>
              <a className={classes.navbarBrand}>
                <div className={classes.logo} />
              </a>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/about'>{t('about-page-caption')}</Nav.Link>
              <Nav.Link href='/products'>{t('products-page-caption')}</Nav.Link>
              <Nav.Link href='/applications'>{t('application-page-caption')}</Nav.Link>
              <Nav.Link href='/why-robotmaster'>{t('why-page-caption')}</Nav.Link>
              <Nav.Link href='/success-stories'>{t('success-page-caption')}</Nav.Link>
              <Nav.Link href='/partners'>{t('partners-page-caption')}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
  );
};

export default navbar;