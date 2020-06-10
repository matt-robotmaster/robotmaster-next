import React from 'react';
import useTranslation from "../../../utils/hooks/useTranslation";
import withLocale from '../../../utils/hocs/withLocale';
import Layout from '../../../utils/components/layout/layout';
import classes from './index.module.css';
import {Col, Container, Row} from "react-bootstrap";
import VideoList from '../../../utils/components/video-list/video-list';

const part = () => {
  const { t } = useTranslation();

  return (
      <Layout banner={{
        caption: t('application-page-caption'),
        imageSrc: '/img/application/part/banner.jpg'
      }}>
        <Container className={classes.application}>
          <Row>
            <Col md={12}>
              <h2 id={'path'} className={classes.applicationSubtitle}>
                {t('application-part')}
              </h2>
              <p>
                {t('app-part-para-1')}
              </p>
              <h3>
                {t('app-part-subhead-1')}
              </h3>
              <ul>
                <li>
                  {t('app-part-list-1-1')}
                </li>
                <li>
                  {t('app-part-list-1-2')}
                </li>
                <li>
                  {t('app-part-list-1-3')}
                </li>
              </ul>
              <h3>
                {t('application-videos')}
              </h3>
              <VideoList id={'part'}/>
            </Col>
          </Row>
        </Container>
      </Layout>
  );
};

export default withLocale(part);