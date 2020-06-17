import React, {useEffect} from 'react';
import useTranslation from "../../../utils/hooks/useTranslation";
import withLocale from '../../../utils/hocs/withLocale';
import Layout from '../../../utils/components/layout/layout';
import classes from './index.module.css';
import {Col, Container, Row} from "react-bootstrap";
import VideoList from '../../../utils/components/video-list/video-list';
import {isLocale} from "../../../lib/translations/types";
import Router from "next/router";
import {getInitialLocale} from "../../../lib/translations/getInitialLocale";

const trimming = () => {
  const { t, locale } = useTranslation();
  useEffect(() => {
    if (typeof window !== 'undefined' && !isLocale(locale)) {
      Router.replace(`/${getInitialLocale()}/${Router.pathname.split('/').slice(2).join('/')}`);
    }
  });

  return (
      <Layout banner={{
        caption: t('application-page-caption'),
        imageSrc: '/img/application/trimming/banner.jpg'
      }}>
        <Container className={classes.application}>
          <Row>
            <Col md={12}>
              <h2 id={'path'} className={classes.applicationSubtitle}>
                {t('application-trimming')}
              </h2>
              <p>
                {t('app-trimming-para-1')}
              </p>
              <h3>
                {t('app-trimming-subhead-1')}
              </h3>
              <p>
                {t('app-trimming-para-2')}
              </p>
              <ul className={classes.applicationUlPushedIn}>
                <li>
                  {t('app-trimming-list-1-1')}
                </li>
                <li>
                  {t('app-trimming-list-1-2')}
                </li>
                <li>
                  {t('app-trimming-list-1-3')}
                </li>
              </ul>
              <ul>
                <li>
                  {t('app-trimming-list-2-1')}
                </li>
                <li>
                  {t('app-trimming-list-2-2')}
                </li>
                <li>
                  {t('app-trimming-list-2-3')}
                </li>
                <li>
                  {t('app-trimming-list-2-4')}
                </li>
                <li>
                  {t('app-trimming-list-2-5')}
                </li>
                <li>
                  {t('app-trimming-list-2-6')}
                </li>
              </ul>
              <h3>
                {t('application-videos')}
              </h3>
              <VideoList id={'trimming'}/>
            </Col>
          </Row>
        </Container>
      </Layout>
  );
};

export default withLocale(trimming);