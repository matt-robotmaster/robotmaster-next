import React, {useEffect} from 'react';
import withLocale from '../../../utils/hocs/withLocale';
import Layout from '../../../utils/components/layout/layout';
import useTranslation from '../../../utils/hooks/useTranslation';
import {Col, Row} from "react-bootstrap";
import classes from './index.module.css';
import {isLocale} from "../../../lib/translations/types";
import Router from "next/router";
import {getInitialLocale} from "../../../lib/translations/getInitialLocale";

const whyRobotmaster = () => {
  const { t, locale } = useTranslation();
  useEffect(() => {
    if (typeof window !== 'undefined' && !isLocale(locale)) {
      Router.replace(`/${getInitialLocale()}/${Router.pathname.split('/').slice(2).join('/')}`);
    }
  });

  return (
      <Layout
          banner={{caption: t('why-page-caption')}}
          menu={[{
            caption: t('why-title-1'),
            url: 'why-robotmaster#robotmaster-cad-cam-programming',
          }, {
            caption:t('why-title-2'),
            url: 'why-robotmaster#solving-robotic-programming-challenges',
          }]}
      >
        <h2 id="robotmaster-cad-cam-programming" className="subtitle">
          {t('why-title-1')}
        </h2>
        <Row className="bigger-page-text">
          <Col md={6} lg={6}>
            <p className="leading-paragraph">
              {t('why-prog-lead')}
            </p>
            <p className={classes.whySubLead}>
              {t('why-prog-sublead')}
            </p>
          </Col>
          <Col md={6} lg={6} className="flex-center-img">
            <img src="/img/why/1-PC.png" style={{maxWidth: '100%', maxHeight: '300px'}} />
          </Col>
        </Row>
        <Row className="bigger-page-text">
          <Col md={6} lg={6}>
            <h3 className="subtitle">
              {t('why-prog-block-1-title')}
            </h3>
            <p>
              {t('why-prog-block-1-text')}
            </p>
          </Col>
          <Col md={6} lg={6}>
            <h3 className="subtitle">
              {t('why-prog-block-2-title')}
            </h3>
            <p>
              {t('why-prog-block-2-text')}
            </p>
          </Col>
          <Col md={6} lg={6}>
            <h3 className="subtitle">
              {t('why-prog-block-3-title')}
            </h3>
            <p>
              {t('why-prog-block-3-text')}
            </p>
          </Col>
          <Col md={6} lg={6}>
            <h3 className="subtitle">
              {t('why-prog-block-4-title')}
            </h3>
            <p>
              {t('why-prog-block-4-text')}
            </p>
          </Col>
        </Row>
        <h2 id="solving-robotic-programming-challenges" className="subtitle">
          {t('why-title-1')}
        </h2>
        <Row className="bigger-page-text">
          <Col md={12} lg={12}>
            <p className={[classes.whySolveLead, 'leading-paragraph']}>
              {t('why-solve-lead')}
            </p>
            <h3 className="subtitle">
              {t('why-solve-block-1-title')}
            </h3>
            <p>
              {t('why-solve-block-1-text')}
            </p>
            <img src="/img/why/1.png" style={{maxWidth: '100%', maxHeight: '240px'}} />
            <h3 className="subtitle">
              {t('why-solve-block-2-title')}
            </h3>
            <p>
              {t('why-solve-block-2-text')}
            </p>
            <img src="/img/why/2.png" style={{maxWidth: '100%', maxHeight: '190px'}} />
            <h3 className="subtitle">
              {t('why-solve-block-3-title')}
            </h3>
            <p>
              {t('why-solve-block-3-text')}
            </p>
            <img src="/img/why/3.png" style={{maxWidth: '100%', maxHeight: '220px'}} />
            <h3 className="subtitle">
              {t('why-solve-block-4-title')}
            </h3>
            <p>
              {t('why-solve-block-4-text')}
            </p>
            <img src="/img/why/4.png" style={{maxWidth: '100%', maxHeight: '180px'}} />
            <h3 className="subtitle">
              {t('why-solve-block-5-title')}
            </h3>
            <p>
              {t('why-solve-block-5-text')}
            </p>
            <img src="/img/why/5.png" style={{maxWidth: '100%', maxHeight: '280px'}} />
            <h3 className="subtitle">
              {t('why-solve-block-6-title')}
            </h3>
            <p>
              {t('why-solve-block-6-text')}
            </p>
            <img src="/img/why/6.png" style={{maxWidth: '100%', maxHeight: '200px'}} />
          </Col>
        </Row>
      </Layout>
  );
};

export default withLocale(whyRobotmaster);
