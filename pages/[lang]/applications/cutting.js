import React from 'react';
import useTranslation from "../../../hooks/useTranslation";
import withLocale from '../../../hocs/withLocale';
import Layout from '../../../components/layout/layout';
import Banner from '../../../components/banner/banner';
import classes from './index.module.css';
import {Container} from "react-bootstrap";
import VideoList from '../../../components/video-list/video-list';

const cutting = () => {
  const { t } = useTranslation();

  return (
      <Layout>
        <Banner/>
        <Container className={classes.application}>
          <h2 id={'path'} className={classes.applicationSubtitle}>
            {t('application-cutting')}
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
          <VideoList id={'cutting'}/>
        </Container>
      </Layout>
  );
};

export default withLocale(cutting);