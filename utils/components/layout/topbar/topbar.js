import React, {useState, useEffect} from 'react';
import {
  NavDropdown
} from 'react-bootstrap';
import useTranslation from "../../../hooks/useTranslation";
import {languageNames} from '../../../../lib/translations/config';
import Link from 'next/link';
import { FaBars} from "react-icons/fa";

//TODO: copied from the old codebase, refactor

const topbar = () => {
  const { locale, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTopbarFixed, setIsTopbarFixed] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    }
  });

  const handleScroll = () => {
    const isScrolledFromTop = window.scrollY > 0;
    if (isScrolledFromTop !== isTopbarFixed) {
      setIsTopbarFixed(isScrolledFromTop);
    }
  }

  const handleResize = () => {
    setIsMobileScreen(window.innerWidth <= 991);
  }

  if (isMobileScreen) {
    return (
        <div className={'topbar topbarMobile ' + (isTopbarFixed ? 'topbarFixed' : '')}>
          <div className="container">
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
              {t('topbar-contact-me',)}
            </a>
            <FaBars style={{fontSize: '25px', cursor: 'pointer',}}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}/>
          </div>
          <div
              className={'topbarMenu ' + (isMenuOpen ? 'topbarMenu--open ' : 'topbarMenu--closed ') +
              (isTopbarFixed ? 'topbarMenu--lower' : 'topbarMenu--upper')}>
            <a href="contact">
              {t('contact-page-caption')}
            </a>
            <a href="newsroom">
              {t('blog-page-caption')}
            </a>
            <a
                href="https://robotmaster.atlassian.net/servicedesk/customer/portals"
                target="_blank">
              {t('topbar-support')}
            </a>
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
          </div>
        </div>
    );
  }

  return (
      <div className={'topbar ' + (isTopbarFixed ? 'topbarFixed' : '')}>
        <div className="container">
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
          <a href="contact">
            {t('contact-page-caption')}
          </a>
          <a href="newsroom">
            {t('blog-page-caption')}
          </a>
          <a
              href="https://robotmaster.atlassian.net/servicedesk/customer/portals"
              target="_blank">
            {t('topbar-support')}
          </a>
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
        </div>
      </div>
  );
};

export default topbar;