import React from 'react';
import useTranslation from "../../../hooks/useTranslation";
import withLocale from '../../../hocs/withLocale';
import Layout from '../../../components/layout/layout';
import Banner from '../../../components/banner/banner';
import classes from './index.module.css';
import {Col, Container, Row} from "react-bootstrap";
import VideoList from '../../../components/video-list/video-list';

const dispensing = () => {
  const { t } = useTranslation();

  return (
      <Layout>
        <Banner
            caption={t('application-page-caption')}
            imageSrc='/img/application/dispensing/banner.jpg'
        />
        <Container className={classes.application}>
          <Row>
            <Col md={12}>
              <h2 id={'path'} className={classes.applicationSubtitle}>
                {t('application-dispensing')}
              </h2>
              <p>
                {t('app-dispensing-para-1')}
              </p>
              <h3>
                {t('app-dispensing-subhead-1')}
              </h3>
              <ul>
                <li>
                  {t('app-dispensing-list-1-1')}
                </li>
                <li>
                  {t('app-dispensing-list-1-2')}
                </li>
                <li>
                  {t('app-dispensing-list-1-3')}
                </li>
                <li>
                  {t('app-dispensing-list-1-4')}
                </li>
                <li>
                  {t('app-dispensing-list-1-5')}
                </li>
                <li>
                  {t('app-dispensing-list-1-6')}
                </li>
              </ul>
              <h3>
                {t('application-videos')}
              </h3>
              <VideoList id={'dispensing'}/>
            </Col>
          </Row>
        </Container>
      </Layout>
  );
};

export default withLocale(dispensing);