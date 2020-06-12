import React from "react";
import applications from '../../../../content/applications.json';
import useTranslation from "../../../hooks/useTranslation";
import {Col, Container, Row} from "react-bootstrap";
import classes from './footer.module.css'
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaYoutubeSquare, FaLinkedin} from "react-icons/fa";

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

              <span className={classes.icon}>
                <a href='https://www.facebook.com/robotmasterolp' rel='noreferrer noopener' target='_blank'>
                  <FaFacebookSquare/>
                </a>
              </span>
              <span className={classes.icon}>
                <a href='https://www.twitter.com/robotmaster' rel='noreferrer noopener' target='_blank'>
                  <FaTwitterSquare/>
                </a>
              </span>
              <span className={classes.icon}>
                <a href='https://www.youtube.com/robotmaster' rel='noreferrer noopener' target='_blank'>
                  <FaYoutubeSquare/>
                </a>
              </span>
              <span className={classes.icon}>
                <a href='https://www.linkedin.com/company/1811854' rel='noreferrer noopener' target='_blank'>
                  <FaLinkedin/>
                </a>
              </span>
              <span className={classes.icon}>
                <a href='https://www.instagram.com/robotmaster' rel='noreferrer noopener' target='_blank'>
                  <FaInstagram/>
                </a>
              </span>
            </p>
          </Row>
        </Container>
      </div>
  );
}

export default footer;