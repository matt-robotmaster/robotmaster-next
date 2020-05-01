import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import useTranslation from '../../../hooks/useTranslation';
import classes from './navbar.module.css';
import Link from "next/link";

const navbar = () => {
  const { locale, t } = useTranslation();
  return (
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
            <Link href={`/${locale}/about`} passHref>
              <Nav.Link className={classes.navbarNavLiA}>{t('about-page-caption')}</Nav.Link>
            </Link>
            <Link href={`/${locale}/products`} passHref>
              <Nav.Link className={classes.navbarNavLiA}>{t('products-page-caption')}</Nav.Link>
            </Link>
            <Link href={`/${locale}/applications`} passHref>
              <Nav.Link className={classes.navbarNavLiA}>{t('application-page-caption')}</Nav.Link>
            </Link>
            <Link href={`/${locale}/why-robotmaster`} passHref>
              <Nav.Link className={classes.navbarNavLiA}>{t('why-page-caption')}</Nav.Link>
            </Link>
            <Link href={`/${locale}/success-stories`} passHref>
              <Nav.Link className={classes.navbarNavLiA}>{t('success-page-caption')}</Nav.Link>
            </Link>
            <Link href={`/${locale}/partners`} passHref>
              <Nav.Link className={classes.navbarNavLiA}>{t('partners-page-caption')}</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default navbar;