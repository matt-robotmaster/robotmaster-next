import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Dropdown, DropdownButton} from 'react-bootstrap';

import './topbar.css';

export default function(props) {
  return (
      <div className={'topbar ' + (props.isTopbarFixed ? 'topbarFixed' : '')}>
        <div className="container">
          <a
              className={'btn btn-primary navbar-cta navbar-cta-first ' +
              (props.isTopbarFixed ? 'navbar-cta-fixed' : '')}
              href="contact/live-demo-request">
            <FormattedMessage id='topbar-live-demo'/>
          </a>
          <a
              className={'btn btn-primary navbar-cta ' +
              (props.isTopbarFixed ? 'navbar-cta-fixed' : '')}
              href="contact/contact-me-request">
            <FormattedMessage id='topbar-contact-me'/>
          </a>
          <a href="contact">
            <FormattedMessage id='contact-page-caption'/>
          </a>
          <a href="newsroom">
            <FormattedMessage id='blog-page-caption'/>
          </a>
          <a
              href="https://robotmaster.atlassian.net/servicedesk/customer/portals"
              rel='noreferrer noopener'
              target="_blank">
            <FormattedMessage id='topbar-support'/>
          </a>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
  );
}