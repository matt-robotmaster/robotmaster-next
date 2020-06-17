import React, {useEffect} from 'react';
import Layout from '../../../utils/components/layout/layout';
import useTranslation from "../../../utils/hooks/useTranslation";
import withLocale from "../../../utils/hocs/withLocale";
import {Col} from "react-bootstrap";
import classes from './index.module.css';
import {isLocale} from "../../../lib/translations/types";
import Router from "next/router";
import {getInitialLocale} from "../../../lib/translations/getInitialLocale";

const logos = [
  '/img/partners/abb.gif',
  '/img/partners/fanuc.jpg',
  '/img/partners/kuka.gif',
  '/img/partners/yaskawa.jpg',
  '/img/partners/staubli.gif',
  '/img/partners/comau-robotics.png',
  '/img/partners/denso.jpg',
  '/img/partners/mitsubishi.jpg',
  '/img/partners/hyundai.jpg',
  '/img/partners/kawasaki.jpg',
  '/img/partners/otc.jpg',
  '/img/partners/ur.jpg',
  '/img/partners/panasonic.png',
  '/img/partners/reis-robotics.png',
  '/img/partners/epson-robotics.png',
  '/img/partners/nachi.png',
];

const partners = () => {
  const { t, locale } = useTranslation();
  useEffect(() => {
    if (typeof window !== 'undefined' && !isLocale(locale)) {
      Router.replace(`/${getInitialLocale()}/${Router.asPath.split('/').slice(2).join('/')}`);
    }
  });

  return (
      <Layout banner={{
        caption: t('partners-page-caption')
      }}>
        <h1 id="robot">
          {t('partners-heading')}
        </h1>
        <h4>
          {t('partners-sub-heading')}
        </h4>
        <div className="row">
          {logos.map(logo => (
              <Col md={3} sm={3} xs={4} className={classes.partnerLogo} key={logo}>
                <img src={logo} />
              </Col>
          ))}
        </div>
      </Layout>
  );
};

export default withLocale(partners);
