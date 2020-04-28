import React, {useState, useEffect} from 'react';
import {Dropdown, DropdownButton} from 'react-bootstrap';
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
              rel='noreferrer noopener'
              target="_blank">
            {t('topbar-support')}
          </a>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
  );
};

export default topbar;