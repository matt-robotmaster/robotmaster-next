import React from "react";
import applications from '../../../../content/applications.json';
import useTranslation from "../../../hooks/useTranslation";
import {Col, Container, Row} from "react-bootstrap";
import classes from './footer.module.css'
import Link from "next/link";

const footer = () => {
  const { locale, t } = useTranslation();
  const columns = [{
    title: t('footer-section-about'),
    list: [
      [t('about-title-1'), `/${locale}/about#our-story`],
      [t('about-title-2'), `/${locale}/about#our-team`],
      [t('partners-page-caption'), `/${locale}/partners`],
      [t('events-page-caption'), `/${locale}/events`],
    ],
  }, {
    title: t('blog-page-caption'),
    list: [
      [t('footer-newsroom-whatsnew'), `/${locale}/newsroom`],
      [t('success-page-caption'), `/${locale}/success-stories`],
      [t('success-section-2-title'), `/${locale}/success-stories#media`],
    ],
  }, {
    title: t('products-page-caption'),
    list: [
      [t('whats-new-v66-title'), `/${locale}/newsroom/robotmaster-v7-offline-robot-programming-launch`],
      [t('products-title-2'), `/${locale}/products#interactive`],
      [t('products-title-3'), `/${locale}/products#main-features`],
    ],
  }, {
    title: t('application-page-caption'),
    list: applications.map(function(app) {
      return [
        t('application-' + app.id), `/${locale}/applications/` + app.path,
      ];
    }),
  }, {
    title: t('why-page-caption'),
    list: [
      [t('why-title-1'), `/${locale}/why-robotmaster#robotmaster-cad-cam-programming`],
      [t('why-title-2'), `/${locale}/why-robotmaster#solving-robotic-programming-challenges`],
    ],
  }];

  const createColumn = (column, index) => {
    return (
        <Col xs={6} sm={4} md={4} lg={{span: 2, offset: index === 0 ? 1 : 0}}
             key={column.title}>
          <h5>
            {column.title}
          </h5>
          <ul>
            {column.list.map(element => {
              return (
                  <li key={element[0]}>
                    <Link href={element[1]}>
                      {element[0]}
                    </Link>
                  </li>
              );
            })}
          </ul>
        </Col>
    );
  };

  const createIcon = (icon, url) => {
    return (
        <span className={classes.icon}>
          <a href={url} rel='noreferrer noopener' target='_blank'>
            <i className={'fa fa-' + icon} />
          </a>
        </span>
    );
  };

  //TODO fix social icons

  return (
      <div className={classes.footer}>
        <Container>
          <Row>
            {columns.map(column => createColumn(column))}
          </Row>
          <Row className={classes.legal}>
            <p className={classes.legalPara}>
              <Link href={`/${locale}/privacy`}>
                {t('privacy-page-caption')}
              </Link>
              <span>
                {' | '}
              </span>
              <Link href={`/${locale}/disclaimer`}>
                {t('disclaimer-page-caption')}
              </Link>
              <span>
                {' | '}
              </span>
              <Link href={`/${locale}/eula`}>
                {t('footer-terms-of-use')}
              </Link>
              <span>
                {' | '}
              </span>
              <Link href={`/${locale}/gdpr`}>
                {t('footer-gdpr')}
              </Link>
              <span>
                {' | '}
              </span>
              <span className={classes.copyright}>
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
          </Row>
        </Container>
      </div>
  );
}

export default footer;