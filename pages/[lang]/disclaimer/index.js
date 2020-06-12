import React from 'react';
import Layout from '../../../utils/components/layout/layout';
import useTranslation from "../../../utils/hooks/useTranslation";
import withLocale from "../../../utils/hocs/withLocale";

const disclaimer = () => {
  const { t } = useTranslation();

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
