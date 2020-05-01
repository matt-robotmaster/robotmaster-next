import React from 'react';
import useTranslation from "../../../hooks/useTranslation";
import withLocale from '../../../hocs/withLocale';
import Layout from '../../../components/layout/layout';
import classes from './index.module.css';
import {Col, Container, Row} from "react-bootstrap";
import VideoList from '../../../components/video-list/video-list';

const rail = () => {
  const { t } = useTranslation();

  return (
      <Layout banner={{
        caption: t('application-page-caption'),
        imageSrc: '/img/application/rail/banner.jpg'
      }}>
        <Container className={classes.application}>
          <Row>
            <Col md={12}>
              <h2 id={'path'} className={classes.applicationSubtitle}>
                {t('application-part')}
              </h2>
              <p>
                {t('app-rail-para-1')}
              </p>
              <h3>
                {t('app-rail-subhead-1')}
              </h3>
              <ul>
                <li>
                  {t('app-rail-list-1-1')}
                </li>
                <li>
                  {t('app-rail-list-1-2')}
                </li>
                <li>
                  {t('app-rail-list-1-3')}
                  <ul className={classes.applicationUlPushedIn}>
                    <li>
                      {t('app-rail-list-2-1')}
                    </li>
                    <li>
                      {t('app-rail-list-2-2')}
                    </li>
                    <li>
                      {t('app-rail-list-2-3')}
                    </li>
                  </ul>
                </li>
                <li>
                  {t('app-rail-list-1-4')}
                </li>
                <li>
                  {t('app-rail-list-1-5')}
                </li>
              </ul>
              <h3>
                {t('application-videos')}
              </h3>
              <VideoList id={'rail'}/>
            </Col>
          </Row>
        </Container>
      </Layout>
  );
};

export default withLocale(rail);