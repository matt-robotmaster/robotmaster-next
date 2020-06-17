import React, {useEffect} from 'react';
import Layout from '../../../utils/components/layout/layout';
import useTranslation from "../../../utils/hooks/useTranslation";
import withLocale from "../../../utils/hocs/withLocale";
import {isLocale} from "../../../lib/translations/types";
import Router from "next/router";
import {getInitialLocale} from "../../../lib/translations/getInitialLocale";

const whatsNew = () => {
  const { t, locale } = useTranslation();
  useEffect(() => {
    if (typeof window !== 'undefined' && !isLocale(locale)) {
      Router.replace(`/${getInitialLocale()}/${Router.asPath.split('/').slice(2).join('/')}`);
    }
  });

  return (
      <Layout banner={{
        caption: t('whats-new-page-caption')
      }}>
        <h1 className="page-header">
          {t('whats-new-v66-title')}
        </h1>
        <p>
          {t('whats-new-v66-para')}
        </p>
        <h3>
          {t('whats-new-v66-heading-1')}
        </h3>
        <ul>
          <li>
            {t('whats-new-v66-list-1-item-1')}
          </li>
          <li>
            {t('whats-new-v66-list-1-item-2')}
          </li>
          <li>
            {t('whats-new-v66-list-1-item-3')}
          </li>
          <li>
            {t('whats-new-v66-list-1-item-4')}
          </li>
          <li>
            {t('whats-new-v66-list-1-item-5')}
          </li>
          <li>
            {t('whats-new-v66-list-1-item-6')}
          </li>
          <li>
            {t('whats-new-v66-list-1-item-7')}
          </li>
          <li>
            {t('whats-new-v66-list-1-item-8')}
          </li>
        </ul>
        <h3>
          {t('whats-new-v66-heading-2')}
        </h3>
        <ul>
          <li>
            {t('whats-new-v66-list-2-item-1')}
          </li>
        </ul>
      </Layout>
  );
};

export default withLocale(whatsNew);
