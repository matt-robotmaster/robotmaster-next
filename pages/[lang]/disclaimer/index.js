import React, {useEffect} from 'react';
import Layout from '../../../utils/components/layout/layout';
import useTranslation from "../../../utils/hooks/useTranslation";
import withLocale from "../../../utils/hocs/withLocale";
import {isLocale} from "../../../lib/translations/types";
import Router from "next/router";
import {getInitialLocale} from "../../../lib/translations/getInitialLocale";

const disclaimer = () => {
  const { t, locale } = useTranslation();
  useEffect(() => {
    if (typeof window !== 'undefined' && !isLocale(locale)) {
      Router.replace(`/${getInitialLocale()}/${Router.pathname.split('/').slice(2).join('/')}`);
    }
  });

  return (
      <Layout banner={{
        caption: t('disclaimer-page-caption')
      }}>
        <h1>
          {t('disclaimer-page-caption')}
        </h1>
        <p>
          {t('disclaimer-para-1')}
        </p>
        <p>
          {t('disclaimer-para-2')}
        </p>
        <p>
          {t('disclaimer-para-3')}
        </p>
        <p>
          {t('disclaimer-para-4')}
        </p>
        <p>
          {t('disclaimer-para-5')}
        </p>
      </Layout>
  );
};

export default withLocale(disclaimer);
