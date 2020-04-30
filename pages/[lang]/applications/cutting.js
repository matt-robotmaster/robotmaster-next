import React from 'react';
import withLocale from "../../../hocs/withLocale";
import useTranslation from "../../../hooks/useTranslation";
import Layout from '../../../components/layout/layout';
import Banner from '../../../components/banner/banner';
import classes from './index.module.css';
import {Col, Container, Row} from "react-bootstrap";
import Modal from '../../../components/modal/video-modal';
import applicationData from '../../../data/applications.json';

const appData = applicationData.find(app => app.path === 'cutting');

const cutting = () => {
  const { t } = useTranslation();
  const createVideos = () => {
    const page = appData.id;
    const videos = [];

    for (let i = 1; i <= appData.videos; i++) {
      videos.push(
          <Col xs={12} sm={6} md={6} lg={6} key={'vid-' + i}>
            <div className={`${classes.appVideo} clearfix`}>
              <div
                  className={`${classes.appVideoVidImg} flex-center-img`}
                  data-toggle='modal'
                  data-target={'#app-vid-id-' + i}>
                <img src={'/img/application/' + page + '/vid-' + i + '.png'} />
              </div>
              <div className="text">
                <p>
                  {t('app-' + page + '-vid-' + i + '-text')}
                </p>
              </div>
            </div>
            <Modal videoId={`app-vid-id-${i}`} videoTitle={`app-${page}-vid-${i}-text`}
                  videoUrl={`https://www.youtube.com/embed/${t(`app-${page}-vid-${i}`).split('v=')[1]}`}/>
          </Col>,
      );
    }

    return videos;
  };

  return (
      <Layout>
        <Banner/>
        <Container className={classes.application}>
          <h2 id={'path'} className={classes.applicationSubtitle}>
            {t(`application-${appData.id}`)}
          </h2>
          <p>
            {t('app-cutting-para-1')}
          </p>
          <h3>
            {t('app-cutting-subhead-1')}
          </h3>
          <p>
            {t('app-cutting-para-2')}
          </p>
          <ul className={classes.applicationUlPushedIn}>
            <li>
              {t('app-cutting-list-1-1')}
            </li>
            <li>
              {t('app-cutting-list-1-2')}
            </li>
            <li>
              {t('app-cutting-list-1-3')}
            </li>
          </ul>
          <ul>
            <li>
              {t('app-cutting-list-2-1')}
            </li>
            <li>
              {t('app-cutting-list-2-2')}
            </li>
            <li>
              {t('app-cutting-list-2-3')}
            </li>
            <li>
              {t('app-cutting-list-2-4')}
            </li>
            <li>
              {t('app-cutting-list-2-5')}
            </li>
            <li>
              {t('app-cutting-list-2-6')}
            </li>
          </ul>
          <h3>
            {t('application-videos')}
          </h3>
          <Row id="application-videos-row">
            {createVideos()}
          </Row>
        </Container>
      </Layout>
  );
};

export default withLocale(cutting);