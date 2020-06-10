import React from 'react';
import withLocale from '../../../../utils/hocs/withLocale';
import useTranslation from '../../../../utils/hooks/useTranslation';
import Layout from '../../../../utils/components/layout/layout';

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
