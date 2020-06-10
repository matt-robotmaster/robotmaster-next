import React, {useState, useEffect} from 'react';
import {
  Container,
  Nav,
  Navbar, NavDropdown
} from 'react-bootstrap';
import useTranslation from "../../../hooks/useTranslation";
import {languageNames} from '../../../../lib/translations/config';
import Link from 'next/link';

const topbar = () => {
  const { locale, t } = useTranslation();
  const [isTopbarFixed, setIsTopbarFixed] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    const isScrolledFromTop = window.scrollY > 0;
    if (isScrolledFromTop !== isTopbarFixed) {
      setIsTopbarFixed(isScrolledFromTop);
    }
  }

  return (
      <div className={'topbar ' + (isTopbarFixed ? 'topbarFixed' : '')}>
        <Container>
          <Link href={`/${locale}/contact/live-demo-request`} passHref>
            <a
                className={'btn btn-primary navbar-cta navbar-cta-first ' +
                (isTopbarFixed ? 'navbar-cta-fixed' : '')}>
              {t('topbar-live-demo')}
            </a>
          </Link>
          <Link href={`/${locale}/contact/contact-me-request`} passHref>
            <a
                className={'btn btn-primary navbar-cta ' +
                (isTopbarFixed ? 'navbar-cta-fixed' : '')}>
              {t('topbar-contact-me')}
            </a>
          </Link>
          <Navbar expand='lg' variant='dark'>
            <Navbar.Toggle aria-controls='topbar-navbar-nav' />
            <Navbar.Collapse id='topbar-navbar-nav'>
              <Nav className='mr-auto'>
                <Link href={`/${locale}/contact`} passHref>
                  <Nav.Link>{t('contact-page-caption')}</Nav.Link>
                </Link>
                <Link href={`/${locale}/newsroom`} passHref>
                  <Nav.Link>{t('blog-page-caption')}</Nav.Link>
                </Link>
                <Nav.Link href="https://robotmaster.atlassian.net/servicedesk/customer/portals"
                          rel='noreferrer noopener'
                          target="_blank">{t('topbar-support')}</Nav.Link>
                <NavDropdown id="language-chooser" title={languageNames[locale]}>
                  {Object.keys(languageNames).map(key => {
                    if (languageNames[key]) {
                      return (
                          <NavDropdown.Item href={`/${key}`}>
                            {languageNames[key]}
                          </NavDropdown.Item>
                      );
                    }
                  })}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
  );
};

export default topbar;