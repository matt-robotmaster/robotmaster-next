import React from 'react';
import useTranslation from "../../../hooks/useTranslation";
import withLocale from '../../../hocs/withLocale';
import Layout from '../../../components/layout/layout';
import classes from './index.module.css';
import {Col, Container, Row} from "react-bootstrap";
import VideoList from '../../../components/video-list/video-list';

const coop = () => {
  const { t } = useTranslation();

  return (
      <Layout banner={{
        caption: t('application-page-caption'),
        imageSrc: '/img/application/coop/banner.jpg'
      }}>
        <Container className={classes.application}>
          <Row>
            <Col md={12}>
              <h2 id={'path'} className={classes.applicationSubtitle}>
                {t('application-coop')}
              </h2>
              <p>
                {t('application-coming-soon')}
              </p>
              <h3>
                {t('application-videos')}
              </h3>
              <VideoList id={'coop'}/>
            </Col>
          </Row>
        </Container>
      </Layout>
  );
};

export default withLocale(coop);