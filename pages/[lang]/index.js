import React from 'react';
import useTranslation from "../../utils/hooks/useTranslation";
import withLocale from "../../utils/hocs/withLocale";
import Layout from '../../utils/components/layout/layout';
import {Carousel, Col, Container, Row} from 'react-bootstrap';
import classes from './index.module.css';
import Ribbon from '../../utils/components/ribbon/ribbon';
import Link from "next/link";
import {getLatestPostData} from "../../lib/posts";

const slides = [
  'slideshow-img-1',
  'slideshow-img-2',
  'slideshow-img-3',
  'slideshow-img-4',
  'slideshow-img-5',
  'slideshow-img-6',
  'slideshow-img-7',
];

const Home = ({latestPost}) => {
  const { locale, t } = useTranslation();

  return (
      <Layout>
        <Container>
          <div className={classes.home}>
            <Carousel>
              {slides.map(slide => {
                return (
                    <Carousel.Item>
                      <img
                          className="d-block w-100"
                          src={t(slide)}
                          alt="slide"
                          key={slide}
                      />
                    </Carousel.Item>
                )
              })}
            </Carousel>
            <Ribbon latestPost={latestPost}/>
            <hr className={classes.homeHr} />
            <Container>
              <Row>
                <Col md={{span: 5, offset: 1}}>
                  <h1 className={classes.homeH1First}>
                    {t('home-heading-1-part-1')}
                  </h1>
                  <h1 className={classes.homeH1AfterH1}>
                    <strong>
                      {t('home-heading-1-part-2')}
                    </strong>
                  </h1>
                  <p>
                    {t('home-section-1-para')}
                  </p>
                  <ul>
                    <li>
                      {t('home-section-1-listitem-1')}
                    </li>
                    <li>
                      {t('home-section-1-listitem-2')}
                    </li>
                    <li>
                      {t('home-section-1-listitem-3')}
                    </li>
                    <li>
                      {t('home-section-1-listitem-4')}
                    </li>
                  </ul>
                  <Link href={`/${locale}/products`}>
                    {t('general-learn-more-dotted')}
                  </Link>
                </Col>
                <Col md={5}>
                  <img className="img-responsive" src="/img/screenshot-1.png" />
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md={{span: 5, offset: 1}}>
                  <h1 className={classes.homeH1First}>
                    {t('home-heading-2-part-1')}
                  </h1>
                  <h1 className={classes.homeH1AfterH1}>
                    <strong>
                      {t('home-heading-2-part-2')}
                    </strong>
                  </h1>
                  <p>
                    {t('home-section-2-para')}
                  </p>
                  <Link href={`/${locale}/why-robotmaster`}>
                    {t('general-learn-more-dotted')}
                  </Link>
                </Col>
                <Col md={5}>
                  <ul>
                    <li>
                      {t('home-section-2-listitem-1')}
                    </li>
                    <li>
                      {t('home-section-2-listitem-2')}
                    </li>
                    <li>
                      {t('home-section-2-listitem-3')}
                    </li>
                    <li>
                      {t('home-section-2-listitem-4')}
                    </li>
                    <li>
                      {t('home-section-2-listitem-5')}
                    </li>
                  </ul>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md={{span: 5, offset: 1}}>
                  <h1 className={classes.homeH1First}>
                    <strong>
                      {t('home-heading-3')}
                    </strong>
                  </h1>
                  <p>
                    {t('home-section-3-para')}
                  </p>
                  <Link href={`/${locale}/applications`}>
                    {t('general-learn-more-dotted')}
                  </Link>
                </Col>
                <Col md={{span: 5}}>
                  <img className={[classes.homeImgSpacer, 'img-responsive']} src="/img/screenshot-2.png" />
                </Col>
              </Row>
            </Container>
            <div className={classes.homeRevolution}>
              <img className={[classes.homeRevolutionBackground, 'hidden-sm', 'hidden-xs']} src="/img/r.svg" />
              <Container>
                <Row>
                  <Col md={{span: 5, offset: 1}}>
                    <img className={classes.homeRevolutionTagline} src="/img/revolution.svg" />
                  </Col>
                  <Col md={{span: 5}} className="hidden-sm hidden-xs">
                    <img className={classes.homeRevolutionRobotEvolution} src="/img/robot-evolution.png" />
                  </Col>
                </Row>
                <Row>
                  <Col md={{span: 10, offset: 1}}>
                    <p>
                      {t('home-section-4-para')}
                    </p>
                    <Link href={`/${locale}/why-robotmaster`}>
                      {t('general-learn-more-dotted')}
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Container>
      </Layout>
  );
};

Home.getInitialProps = async () => {
  const latestPost = await getLatestPostData();
  return {
    latestPost
  };
};

export default withLocale(Home);
