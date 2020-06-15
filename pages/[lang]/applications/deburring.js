import React from 'react';
import useTranslation from "../../../utils/hooks/useTranslation";
import withLocale from '../../../utils/hocs/withLocale';
import Layout from '../../../utils/components/layout/layout';
import classes from './index.module.css';
import {Col, Container, Row} from "react-bootstrap";
import VideoList from '../../../utils/components/video-list/video-list';

const deburring = () => {
  const { t } = useTranslation();

  return (
      <Layout banner={{
              caption: t('application-page-caption'),
              imageSrc: '/img/application/deburring/banner.jpg'
            }}>
        <Container className={classes.application}>
          <Row>
            <Col md={12}>
              <h2 id={'path'} className={classes.applicationSubtitle}>
                {t('application-deburring')}
              </h2>
              <p>
                {t('app-deburring-para-1')}
              </p>
              <h3>
                {t('app-deburring-subhead-1')}
              </h3>
              <p>
                {t('app-deburring-para-2')}
              </p>
              <ul className={classes.applicationUlPushedIn}>
                <li>
                  {t('app-deburring-list-1-1')}
                </li>
                <li>
                  {t('app-deburring-list-1-2')}
                </li>
                <li>
                  {t('app-deburring-list-1-3')}
                </li>
                <li>
                  {t('app-deburring-list-1-4')}
                </li>
                <li>
                  {t('app-deburring-list-1-5')}
                </li>
              </ul>
              <ul>
                <li>
                  {t('app-deburring-list-2-1')}
                </li>
                <li>
                  {t('app-deburring-list-2-2')}
                </li>
                <li>
                  {t('app-deburring-list-2-3')}
                </li>
                <li>
                  {t('app-deburring-list-2-4')}
                </li>
                <li>
                  {t('app-deburring-list-2-5')}
                </li>
                <li>
                  {t('app-deburring-list-2-6')}
                </li>
              </ul>
              <h3>
                {t('application-videos')}
              </h3>
              <VideoList id={'deburring'}/>
            </Col>
          </Row>
        </Container>
      </Layout>
  );
};

export default withLocale(deburring);