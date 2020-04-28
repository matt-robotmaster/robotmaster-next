import React, {useState, useEffect} from 'react';
import {
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  Navbar, NavDropdown
} from 'react-bootstrap';
import useTranslation from "../../../hooks/useTranslation";

const topbar = () => {
  const { t } = useTranslation();
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
          <a
              className={'btn btn-primary navbar-cta navbar-cta-first ' +
              (isTopbarFixed ? 'navbar-cta-fixed' : '')}
              href="contact/live-demo-request">
            {t('topbar-live-demo')}
          </a>
          <a
              className={'btn btn-primary navbar-cta ' +
              (isTopbarFixed ? 'navbar-cta-fixed' : '')}
              href="contact/contact-me-request">
            {t('topbar-contact-me')}
          </a>

          <Navbar expand='lg'>
            <Navbar.Toggle aria-controls='topbar-navbar-nav' />
            <Navbar.Collapse id='topbar-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link href='contact'>{t('contact-page-caption')}</Nav.Link>
                <Nav.Link href='newsroom'>{t('blog-page-caption')}</Nav.Link>
                <Nav.Link href="https://robotmaster.atlassian.net/servicedesk/customer/portals"
                          rel='noreferrer noopener'
                          target="_blank">{t('topbar-support')}</Nav.Link>
                <NavDropdown bg='light' id="topbar-nav-dropdown" title="Dropdown">
                  <NavDropdown.Item href="#/action-1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#/action-2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#/action-3">Something else</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        </Container>
      </div>
  );
};

export default topbar;