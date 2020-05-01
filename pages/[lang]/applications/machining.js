import React from 'react';
import useTranslation from "../../../hooks/useTranslation";
import withLocale from '../../../hocs/withLocale';
import Layout from '../../../components/layout/layout';
import Banner from '../../../components/banner/banner';
import classes from './index.module.css';
import {Col, Container, Row} from "react-bootstrap";
import VideoList from '../../../components/video-list/video-list';

const machining = () => {
  const { t } = useTranslation();

  return (
      <Layout>
        <Banner
            caption={t('application-page-caption')}
            imageSrc='/img/application/machining/banner.jpg'
        />
        <Container className={classes.application}>
          <Row>
            <Col md={12}>
              <h2 id={'path'} className={classes.applicationSubtitle}>
                {t('application-machining')}
              </h2>
              <p>
                {t('app-machining-para-1')}
              </p>
              <h3>
                {t('app-machining-subhead-1')}
              </h3>
              <p>
                {t('app-machining-para-2')}
              </p>
              <ul className={classes.applicationUlPushedIn}>
                <li>
                  {t('app-machining-list-1-1')}
                </li>
                <li>
                  {t('app-machining-list-1-2')}
                </li>
                <li>
                  {t('app-machining-list-1-3')}
                </li>
                <li>
                  {t('app-machining-list-1-4')}
                </li>
              </ul>
              <ul>
                <li>
                  {t('app-machining-list-2-1')}
                </li>
                <li>
                  {t('app-machining-list-2-2')}
                </li>
                <li>
                  {t('app-machining-list-2-3')}
                </li>
                <li>
                  {t('app-machining-list-2-4')}
                </li>
                <li>
                  {t('app-machining-list-2-5')}
                </li>
                <li>
                  {t('app-machining-list-2-6')}
                </li>
              </ul>
              <h3>
                {t('application-videos')}
              </h3>
              <VideoList id={'machining'}/>
            </Col>
          </Row>
        </Container>
      </Layout>
  );
};

export default withLocale(machining);