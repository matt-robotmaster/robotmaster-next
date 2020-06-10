import React from 'react';
import useTranslation from "../../../utils/hooks/useTranslation";
import withLocale from '../../../utils/hocs/withLocale';
import Layout from '../../../utils/components/layout/layout';
import classes from './index.module.css';
import {Col, Container, Row} from "react-bootstrap";
import VideoList from '../../../utils/components/video-list/video-list';

const deflashing = () => {
  const { t } = useTranslation();

  return (
      <Layout banner={{
        caption: t('application-page-caption'),
        imageSrc: '/img/application/deflashing/banner.jpg'
      }}>
        <Container className={classes.application}>
          <Row>
            <Col md={12}>
              <h2 id={'path'} className={classes.applicationSubtitle}>
                {t('application-deflashing')}
              </h2>
              <p>
                {t('app-deflashing-para-1')}
              </p>
              <h3>
                {t('app-deflashing-subhead-1')}
              </h3>
              <ul>
                <li>
                  {t('app-deflashing-list-1-1')}
                </li>
                <li>
                  {t('app-deflashing-list-1-2')}
                </li>
                <li>
                  {t('app-deflashing-list-1-3')}
                </li>
              </ul>
              <h3>
                {t('application-videos')}
              </h3>
              <VideoList id={'deflashing'}/>
            </Col>
          </Row>
        </Container>
      </Layout>
  );
};

export default withLocale(deflashing);