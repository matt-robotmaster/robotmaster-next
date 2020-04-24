import React from "react";
import {FormattedMessage} from "react-intl";

import './footer.css';
import applications from '../../applications/applications.json';

export default function () {
  const columns = [{
    title: <FormattedMessage id='footer-section-about'/>,
    list: [
      [<FormattedMessage id='about-title-1'/>, 'about#our-story'],
      [<FormattedMessage id='about-title-2'/>, 'about#our-team'],
      [<FormattedMessage id='partners-page-caption'/>, 'partners'],
      [<FormattedMessage id='events-page-caption'/>, 'events'],
    ],
  }, {
    title: <FormattedMessage id='blog-page-caption'/>,
    list: [
      [<FormattedMessage id='footer-newsroom-whatsnew'/>, 'newsroom'],
      [<FormattedMessage id='success-page-caption'/>, 'success-stories'],
      [<FormattedMessage id='success-section-2-title'/>, 'success-stories#media'],
    ],
  }, {
    title: <FormattedMessage id='products-page-caption'/>,
    list: [
      [<FormattedMessage id='whats-new-v66-title'/>, 'newsroom/robotmaster-v7-offline-robot-programming-launch'],
      [<FormattedMessage id='products-title-2'/>, 'products#interactive'],
      [<FormattedMessage id='products-title-3'/>, 'products#main-features'],
    ],
  }, {
    title: <FormattedMessage id='application-page-caption'/>,
    list: applications.map(function(app) {
      return [
        <FormattedMessage id={'application-' + app.id}/>, 'applications/' + app.path,
      ];
    }),
  }, {
    title: <FormattedMessage id='why-page-caption'/>,
    list: [
      [<FormattedMessage id='why-title-1'/>, 'why-robotmaster#robotmaster-cad-cam-programming'],
      [<FormattedMessage id='why-title-2'/>, 'why-robotmaster#solving-robotic-programming-challenges'],
    ],
  }];

  const createColumn = (column, index) => {
    return (
        <div
            className={'col-xs-6 col-sm-4 col-md-4 col-lg-2' + (index === 0 ?
                ' col-lg-offset-1' : '')}
            key={column.title}>
          <h5>
            {column.title}
          </h5>
          <ul>
            {column.list.map(element => {
              return (
                  <li key={element[0]}>
                    <a href={element[1]}>
                      {element[0]}
                    </a>
                  </li>
              );
            })}
          </ul>
        </div>
    );
  };

  const createIcon = (icon, url) => {
    return (
        <span className="icon">
        <a href={url} rel='noreferrer noopener' target="_blank">
          <i className={'fa fa-' + icon} />
        </a>
      </span>
    );
  };

  return (
      <div className="footer">
        <div className="container">
          <div className="row">
            {columns.map(column => createColumn(column))}
          </div>
          <div className="row legal">
            <p className='legalPara'>
              <a href="privacy">
                {<FormattedMessage id='privacy-page-caption'/>}
              </a>
              <span>
                {' | '}
              </span>
              <a href="disclaimer">
                {<FormattedMessage id='disclaimer-page-caption'/>}
              </a>
              <span>
                {' | '}
              </span>
              <a href="eula">
                {<FormattedMessage id='footer-terms-of-use'/>}
              </a>
              <span>
                {' | '}
              </span>
              <a href="gdpr">
                {<FormattedMessage id='footer-gdpr'/>}
              </a>
              <span>
                {' | '}
              </span>
              <span className="copyright">
                {<FormattedMessage id='footer-copyright'/>}
              </span>
              {createIcon('facebook-square',
                  'https://www.facebook.com/robotmasterolp')}
              {createIcon('twitter-square',
                  'https://www.twitter.com/robotmaster')}
              {createIcon('youtube-square',
                  'https://www.youtube.com/robotmaster')}
              {createIcon('linkedin-square',
                  'https://www.linkedin.com/company/1811854')}
              {createIcon('instagram',
                  'https://www.instagram.com/robotmaster')}
            </p>
          </div>
        </div>
      </div>
  );
}