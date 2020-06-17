import React, {useEffect} from 'react';
import withLocale from '../../../../utils/hocs/withLocale';
import useTranslation from '../../../../utils/hooks/useTranslation';
import Layout from '../../../../utils/components/layout/layout';
import {isLocale} from "../../../../lib/translations/types";
import Router from "next/router";
import {getInitialLocale} from "../../../../lib/translations/getInitialLocale";

const informationRequestSuccess = () => {
  const { t, locale } = useTranslation();
  useEffect(() => {
    if (typeof window !== 'undefined' && !isLocale(locale)) {
      Router.replace(`/${getInitialLocale()}/${Router.pathname.split('/').slice(2).join('/')}`);
    }
  });

  return (
      <Layout banner={{
        caption: t('inforeq-success-page-caption')
      }}>
        <div className="alert alert-success">
          {t('inforeq-success-message')}
        </div>
      </Layout>
  );
};

export default withLocale(informationRequestSuccess);
