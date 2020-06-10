import React from 'react';
import withLocale from '../../../../hocs/withLocale';
import useTranslation from '../../../../hooks/useTranslation';
import Layout from '../../../../components/layout/layout';

const informationRequestSuccess = () => {
  const { t } = useTranslation();

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
