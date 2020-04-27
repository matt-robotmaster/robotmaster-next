import Head from 'next/head';
import { withTranslation } from '../../i18n';
import Layout from '../../components/layout/layout';
import {Carousel, Container} from 'react-bootstrap';
//import classes from './index.module.css';
import Ribbon from '../../components/ribbon/ribbon';

const slides = [
  'slideshow-img-1',
  'slideshow-img-2',
  'slideshow-img-3',
  'slideshow-img-4',
  'slideshow-img-5',
  'slideshow-img-6',
  'slideshow-img-7',
];

const Home = ({ t }) => {
  return (
      <Layout>
        <Head>
          <title>Create Next App </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
          <div className="home">
            <Carousel>
              {slides.map(slide => {
                return (
                    <Carousel.Item>
                      <img
                          className="d-block w-100"
                          src={t(slide)}
                          alt="slide"
                      />
                    </Carousel.Item>
                )
              })}
            </Carousel>
            <Ribbon/>
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-md-5 col-md-offset-1">
                  <h1>
                    {t('home-heading-1-part-1')}
                  </h1>
                  <h1>
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
                  <a href="products">
                    {t('general-learn-more-dotted')}
                  </a>
                </div>
                <div className="col-md-5">
                  <img className="img-responsive" src="/img/screenshot-1.png" />
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-5 col-md-offset-1">
                  <h1>
                    {t('home-heading-2-part-1')}
                  </h1>
                  <h1>
                    <strong>
                      {t('home-heading-2-part-2')}
                    </strong>
                  </h1>
                  <p>
                    {t('home-section-2-para')}
                  </p>
                  <a href="why-robotmaster">
                    {t('general-learn-more-dotted')}
                  </a>
                </div>
                <div className="col-md-5">
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
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-5 col-md-offset-1">
                  <h1>
                    <strong>
                      {t('home-heading-3')}
                    </strong>
                  </h1>
                  <p>
                    {t('home-section-3-para')}
                  </p>
                  <a href="applications">
                    {t('general-learn-more-dotted')}
                  </a>
                </div>
                <div className="col-md-5">
                  <img className="spacer img-responsive" src="/img/screenshot-2.png" />
                </div>
              </div>
            </div>
            <div className="revolution">
              <img className="background hidden-sm hidden-xs" src="/img/r.svg" />
              <div className="container">
                <div className="row">
                  <div className="col-md-5 col-md-offset-1">
                    <img className="tagline" src="/img/revolution.svg" />
                  </div>
                  <div className="col-md-5 hidden-sm hidden-xs">
                    <img className="robot-evolution" src="/img/robot-evolution.png" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <p>
                      {t('home-section-4-para')}
                    </p>
                    <a href="why-robotmaster">
                      {t('general-learn-more-dotted')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
  );
};

Home.getInitialProps = async () => {
  return { namespacesRequired: ['common'] };
}

export default withTranslation('common')(Home);
