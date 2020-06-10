import React from 'react';
import withLocale from '../../../utils/hocs/withLocale';
import Layout from '../../../utils/components/layout/layout';
import {Col, Row} from 'react-bootstrap';
import useTranslation from "../../../utils/hooks/useTranslation";
import classes from './index.module.css';

const timelineYears = [
  {
    year: '2002',
    tallImg: false,
    parts: ['1'],
  },
  {
    year: '2003',
    tallImg: false,
    parts: ['1'],
  },
  {
    year: '2004',
    tallImg: false,
    parts: ['1'],
  },
  {
    year: '2005',
    tallImg: false,
    parts: ['1'],
  },
  {
    year: '2008',
    tallImg: false,
    parts: ['1'],
  },
  {
    year: '2011',
    tallImg: false,
    parts: ['1'],
  },
  {
    year: '2013',
    tallImg: true,
    parts: ['1', '2'],
  },
  {
    year: '2014',
    tallImg: false,
    parts: ['1'],
  },
  {
    year: '2015',
    tallImg: true,
    parts: ['1', '2'],
  },
];

const about = () => {
  const { locale, t } = useTranslation();

  const menu = [{
    caption: t('about-title-1'),
    url: 'about#our-story',
  }, {
    caption: t('about-title-2'),
    url: 'about#our-team',
  }];

  return (
      <Layout className={classes.about} menu={menu} banner={{
        caption: t('about-page-caption')
      }}>
        <h2 id='our-story' className='subtitle'>
          {t('about-title-1')}
        </h2>
        <Row className='bigger-page-text'>
          <Col md={6} lg={6}>
            <p className='leading-paragraph'>
              {t('about-story-1')}
            </p>
            <p>
              {t('about-story-2')}
            </p>
            <p>
              {t('about-story-3')}
            </p>
            <p dangerouslySetInnerHTML={{
              __html: t('about-story-4')
              .replace('{roboticMachining}',
                  `<a
                      href={'/${locale}/applications/machining'}>
                    robotic machining
                  </a>`)
            }}>
            </p>
            <p>
              {t('about-story-5')}
            </p>
            <p>
              {t('about-story-6')}
            </p>
          </Col>
          <Col md={6} lg={6}>
            {timelineYears.map(function(data) {
              return (
                  <div className='timeline-item clearfix' key={data.year}>
                    <div className='timeline-img'>
                      <img src={'/img/about/' + data.year + '.png'} alt={data.year} />
                    </div>
                    <div
                        className={'timeline-desc' + (data.tallImg ?
                            ' double' : '')}>
                      <p>
                  <span className='year'>
                    {data.year}
                  </span>
                        <br />
                        <span className='flavor'>
                    {data.parts.map(function(part) {
                      return t(`about-flavor-${data.year}-${part}`);
                    })}
                  </span>
                      </p>
                    </div>
                  </div>
              );
            })}
          </Col>
        </Row>
        <h2 id='our-team' className='subtitle'>
          {t('about-title-2')}
        </h2>
        <Row className='bigger-page-text'>
          <Col md={12} lg={12}>
            <p className='leading-paragraph'>
              {t('about-team-1')}
            </p>
          </Col>
        </Row>
        <Row className='bigger-page-text' style={{marginBottom: '20px'}}>
          <Col md={7} lg={7}>
            <p>
              {t('about-team-2')}
            </p>
          </Col>
          <Col md={5} lg={5} className='flex-center-img'>
            <img src='/img/about/1.png' style={{maxWidth: '60%', maxHeight: '240px'}} />
          </Col>
        </Row>
        <Row className='bigger-page-text' style={{marginBottom: '20px'}}>
          <Col xs={12} sm={12} md={{span: 7, push: 5}} lg={{span: 7, push: 5}}>
            <p>
              {t('about-team-3')}
            </p>
          </Col>
          <Col xs={12} sm={12} md={{span: 5, pull: 7}} lg={{span: 5, pull: 7}}
              className='flex-center-img'>
            <img src='/img/about/2.png' style={{maxWidth: '60%', maxHeight: '240px'}} />
          </Col>
        </Row>
        <Row className='bigger-page-text' style={{marginBottom: '20px'}}>
          <Col md={7} lg={7}>
            <p style={{marginTop: '20px'}}>
              {t('about-team-4')}
            </p>
          </Col>
          <Col md={5} lg={5} className='flex-center-img'>
            <img src='/img/about/3.png' style={{maxWidth: '60%', maxHeight: '240px'}} />
          </Col>
        </Row>
        <Row className='bigger-page-text' style={{marginBottom: '20px'}}>
          <Col xs={12} sm={12} md={{span: 7, push: 5}} lg={{span: 7, push: 5}}>
            <p>
              {t('about-team-5')}
            </p>
          </Col>
          <Col xs={12} sm={12} md={{span: 5, pull: 7}} lg={{span: 5, pull: 7}}
              className='flex-center-img'>
            <img src='/img/about/4.png' style={{maxWidth: '60%', maxHeight: '240px'}} />
          </Col>
        </Row>
      </Layout>
  );
};

export default withLocale(about);
