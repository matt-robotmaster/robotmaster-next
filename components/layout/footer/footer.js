import React from "react";

import applications from '../../../applications.json';
import useTranslation from "../../../hooks/useTranslation";
import withLocale from "../../../hocs/withLocale";

const footer = () => {
  const { t } = useTranslation();
  const columns = [{
    title: t('footer-section-about'),
    list: [
      [t('about-title-1'), 'about#our-story'],
      [t('about-title-2'), 'about#our-team'],
      [t('partners-page-caption'), 'partners'],
      [t('events-page-caption'), 'events'],
    ],
  }, {
    title: t('blog-page-caption'),
    list: [
      [t('footer-newsroom-whatsnew'), 'newsroom'],
      [t('success-page-caption'), 'success-stories'],
      [t('success-section-2-title'), 'success-stories#media'],
    ],
  }, {
    title: t('products-page-caption'),
    list: [
      [t('whats-new-v66-title'), 'newsroom/robotmaster-v7-offline-robot-programming-launch'],
      [t('products-title-2'), 'products#interactive'],
      [t('products-title-3'), 'products#main-features'],
    ],
  }, {
    title: t('application-page-caption'),
    list: applications.map(function(app) {
      return [
        t('application-' + app.id), 'applications/' + app.path,
      ];
    }),
  }, {
    title: t('why-page-caption'),
    list: [
      [t('why-title-1'), 'why-robotmaster#robotmaster-cad-cam-programming'],
      [t('why-title-2'), 'why-robotmaster#solving-robotic-programming-challenges'],
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
                {t('privacy-page-caption')}
              </a>
              <span>
                {' | '}
              </span>
              <a href="disclaimer">
                {t('disclaimer-page-caption')}
              </a>
              <span>
                {' | '}
              </span>
              <a href="eula">
                {t('footer-terms-of-use')}
              </a>
              <span>
                {' | '}
              </span>
              <a href="gdpr">
                {t('footer-gdpr')}
              </a>
              <span>
                {' | '}
              </span>
              <span className="copyright">
                {t('footer-copyright')}
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

export default withLocale(footer);