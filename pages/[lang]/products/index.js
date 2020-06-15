import React from 'react';
import withLocale from '../../../utils/hocs/withLocale';
import Layout from '../../../utils/components/layout/layout';
import {Col, Row} from 'react-bootstrap';
import useTranslation from "../../../utils/hooks/useTranslation";
import classes from './index.module.css';

const products = () => {
  const { t } = useTranslation();

  const menu = [{
    caption: t('products-title-1'),
    url: 'products#what-is-robotmaster',
  }, {
    caption: t('products-title-2'),
    url: 'products#interactive',
  }, {
    caption: t('products-title-3'),
    url: 'products#main-features',
  }, {
    caption: t('cta-req-info'),
    url: 'contact/information-request',
  }];

  return (
      <Layout menu={menu} banner={{
        caption: t('products-page-caption')
      }}>
        <h2 id="what-is-robotmaster" className="subtitle">
          {t('products-title-1')}
        </h2>
        <section className={classes.productsSection}>
          <Row className="bigger-page-text">
            <Col md={6} lg={6}>
              <p>
                {t('products-what-lead')}
              </p>
              <ul>
                <li>
                  {t('products-what-list-1')}
                </li>
                <li>
                  {t('products-what-list-2')}
                </li>
                <li>
                  {t('products-what-list-3')}
                </li>
                <li>
                  {t('products-what-list-4')}
                </li>
              </ul>
            </Col>
            <Col md={6} lg={6} className="flex-center-img">
              <img
                  src="/img/products/Computer.png"
                  style={{maxWidth: '100%', maxHeight: '300px'}} />
            </Col>
          </Row>
        </section>

        <h2 id="interactive" className="subtitle">
          {t('products-title-2')}
        </h2>
        <Row className="bigger-page-text">
          <Col md={6} lg={6}>
            <p className="leading-paragraph">
              {t('products-inter-lead')}
            </p>
          </Col>
          <Col md={6} lg={6} className="flex-center-img">
            <img
                src="/img/products/Trimming.jpg"
                style={{maxWidth: '100%', maxHeight: '200px'}} />
          </Col>
        </Row>
        <Row className="bigger-page-text">
          <Col md={12} lg={12}>
            <p>
              {t('products-inter-text')}
            </p>
          </Col>
        </Row>
        <img
            src="/img/products/3-robots.jpg"
            style={{maxWidth: '100%', marginBottom: '20px'}} />
        <img
            src="/img/products/3-robots-2.jpg"
            style={{maxWidth: '100%', marginBottom: '50px'}} />
        <h2 id="main-features" className="subtitle">
          {t('products-title-3')}
        </h2>
        <Row className="bigger-page-text">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-pull-8 col-lg-pull-8">
            <img src="/img/products/1.jpg" style={{maxWidth: '100%', maxHeight: '240px'}} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-push-4 col-lg-push-4 product-feature-box right clearfix">
            <h3 className="subtitle">
              {t('products-feat-title-1')}
            </h3>
            <p className="leading-paragraph">
              {t('products-feat-text-1')}
            </p>
            <ul className="products-list">
              <li>
                {t('products-feat-list-1-1')}
              </li>
              <li>
                {t('products-feat-list-1-2')}
              </li>
              <li>
                {t('products-feat-list-1-3')}
              </li>
              <li>
                {t('products-feat-list-1-4')}
              </li>
            </ul>
          </div>
        </Row>
        <Row className="bigger-page-text">
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 product-feature-box clearfix">
            <h3 className="subtitle">
              {t('products-feat-title-2')}
            </h3>
            <p className="leading-paragraph">
              {t('products-feat-text-2')}
            </p>
            <ul className="products-list">
              <li>
                {t('products-feat-list-2-1')}
              </li>
              <li>
                {t('products-feat-list-2-2')}
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <img src="/img/products/4.jpg" style={{maxWidth: '100%', maxHeight: '240px'}} />
          </div>
        </Row>
        <Row className="bigger-page-text">
          <div
              className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-pull-8 col-lg-pull-8">
            <img src="/img/products/3.jpg" style={{maxWidth: '100%', maxHeight: '240px'}} />
          </div>
          <div
              className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-push-4 col-lg-push-4 product-feature-box right clearfix">
            <h3 className="subtitle">
              {t('products-feat-title-3')}
            </h3>
            <p className="leading-paragraph">
              {t('products-feat-text-3')}
            </p>
            <ul className="products-list">
              <li>
                {t('products-feat-list-3-1')}
              </li>
              <li>
                {t('products-feat-list-3-2')}
              </li>
              <li>
                {t('products-feat-list-3-3')}
              </li>
            </ul>
          </div>
        </Row>
        <Row className="bigger-page-text">
          <Col xs={12} sm={12} md={8} lg={8}
              className="product-feature-box clearfix">
            <h3 className="subtitle">
              {t('products-feat-title-4')}
            </h3>
            <p className="leading-paragraph">
              {t('products-feat-text-4')}
            </p>
            <ul className="products-list">
              <li>
                {t('products-feat-list-4-1')}
              </li>
              <li>
                {t('products-feat-list-4-2')}
              </li>
              <li>
                {t('products-feat-list-4-3')}
              </li>
              <li>
                {t('products-feat-list-4-4')}
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <img src="/img/products/2.jpg" style={{maxWidth: '100%', maxHeight: '240px'}} />
          </Col>
        </Row>
        <Row className="bigger-page-text">
          <div
              className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-pull-8 col-lg-pull-8">
            <img src="/img/products/6.jpg" style={{maxWidth: '100%', maxHeight: '240px'}} />
          </div>
          <div
              className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-push-4 col-lg-push-4 product-feature-box right clearfix">
            <h3 className="subtitle">
              {t('products-feat-title-5')}
            </h3>
            <p className="leading-paragraph">
              {t('products-feat-text-5')}
            </p>
            <ul className="products-list">
              <li>
                {t('products-feat-list-5-1')}
              </li>
              <li>
                {t('products-feat-list-5-2')}
              </li>
              <li>
                {t('products-feat-list-5-3')}
              </li>
            </ul>
          </div>
        </Row>
        <Row className="bigger-page-text">
          <Col xs={12} sm={12} md={8} lg={8}
              className="product-feature-box clearfix">
            <h3 className="subtitle">
              {t('products-feat-title-6')}
            </h3>
            <p className="leading-paragraph">
              {t('products-feat-text-6')}
            </p>
            <ul className="products-list">
              <li>
                {t('products-feat-list-6-1')}
              </li>
              <li>
                {t('products-feat-list-6-2')}
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <img src="/img/products/7.jpg" style={{maxWidth: '100%', maxHeight: '240px'}} />
          </Col>
        </Row>
      </Layout>
  );
};

export default withLocale(products);
