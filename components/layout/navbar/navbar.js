import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import useTranslation from '../../../hooks/useTranslation';
import classes from './navbar.module.css';
import Link from "next/link";

const navbar = () => {
  const { locale, t } = useTranslation();
  return (
      <Container>
        <Navbar bg='light' expand='lg'>
          <Link href='/' passHref>
            <Navbar.Brand href='/'>
              <div className={classes.navbarDefault}>
                <a className={classes.navbarBrand}>
                  <div className={classes.logo} />
                </a>
              </div>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Link href={`${locale}/about`} passHref>
                <Nav.Link>{t('about-page-caption')}</Nav.Link>
              </Link>
              <Link href={`${locale}/products`} passHref>
                <Nav.Link>{t('products-page-caption')}</Nav.Link>
              </Link>
              <Link href={`${locale}/applications`} passHref>
                <Nav.Link>{t('application-page-caption')}</Nav.Link>
              </Link>
              <Link href={`${locale}/why-robotmaster`} passHref>
                <Nav.Link>{t('why-page-caption')}</Nav.Link>
              </Link>
              <Link href={`${locale}/success-stories`} passHref>
                <Nav.Link>{t('success-page-caption')}</Nav.Link>
              </Link>
              <Link href={`${locale}/partners`} passHref>
                <Nav.Link>{t('partners-page-caption')}</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
  );
};

export default navbar;