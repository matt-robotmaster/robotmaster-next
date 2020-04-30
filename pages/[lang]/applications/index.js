import React from 'react';
import withLocale from '../../../hocs/withLocale';
import useTranslation from '../../../hooks/useTranslation';
import Layout from '../../../components/layout/layout';
import {Col, Container, Row} from 'react-bootstrap';
import Banner from '../../../components/banner/banner';
import applicationData from '../../../data/applications.json';

const applications = () => {
  const { t } = useTranslation();

  return (
      <Layout>
        <Banner caption={t('application-page-caption')}/>
        <Container>
          <h2 id='core-of-your-process' className='subtitle'>
            {t('application-title-1')}
          </h2>
          <Row className='bigger-page-text'>
            <Col md={12} lg={12}>
              <p>
                {t('application-text')}
              </p>
            </Col>
          </Row>
          <Row>
            {applicationData.map(function(app) {
              return (
                  <Col xs={12} sm={6} md={4} lg={4}
                      className='application-category'
                      key={app.id}>
                    <p>
                      {t('application-' + app.id)}
                    </p>
                    <a href={'applications/' + app.path}>
                      <img
                          className='category-img'
                          src={'/img/application/' + app.path + '.png'}
                          style={{maxWidth: '90%', maxHeight: '160px'}} />
                    </a>
                    <p className='more'>
                      <a href={'applications/' + app.path}>
                        {t('application-learn-more')}
                        <i className='fa fa-chevron-right' />
                      </a>
                    </p>
                  </Col>
              );
            })}
          </Row>
        </Container>
      </Layout>
  );
};

export default withLocale(applications);
