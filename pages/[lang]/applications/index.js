import React from 'react';
import withLocale from '../../../hocs/withLocale';
import useTranslation from '../../../hooks/useTranslation';
import Layout from '../../../components/layout/layout';
import {Col, Container, Row} from 'react-bootstrap';
import applicationData from '../../../data/applications.json';
import classes from './index.module.css';
import Link from "next/link";
// import {FaChevronRight} from "react-icons/all";

const applications = () => {
  const { locale, t } = useTranslation();

  return (
      <Layout
          banner={{caption: t('application-page-caption')}}
          menu={[{
            caption: t('application-title-1'),
            url: 'applications#core-of-your-process',
          }]}
      >
        <Container className={classes.application}>
          <h2 id='core-of-your-process' className={classes.applicationSubtitle}>
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
                      className={classes.applicationCategory}
                      key={app.id}>
                    <p className={classes.applicationCategoryP}>
                      {t('application-' + app.id)}
                    </p>
                    <Link href={`/${locale}/applications/${app.path}`} passHref>
                      <a>
                        <img
                            className={classes.applicationCategoryCategoryImg}
                            src={'/img/application/' + app.path + '.png'}
                            style={{maxWidth: '90%', maxHeight: '160px'}}
                            alt={app.path}
                        />
                      </a>
                    </Link>
                    <p className={classes.applicationCategoryPMore}>
                      <Link href={`/${locale}/applications/${app.path}`} passHref>
                        <a>
                          {t('application-learn-more')}
                          {/*<FaChevronRight className={classes.applicationCategoryPMoreI}/>*/}
                        </a>
                      </Link>
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
