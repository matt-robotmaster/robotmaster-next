import React from 'react';
import withLocale from './../../../../hocs/withLocale';
import useTranslation from './../../../../hooks/useTranslation';
import Layout from './../../../../components/layout/layout';
import {Container} from 'react-bootstrap';
import ContactForm from './../../../../components/form/contact-form';

const informationRequest = () => {
  const { t } = useTranslation();

  return (
      <Layout banner={{
        caption: t('inforeq-page-caption')
      }}>
        <Container>
          <h1>
            {t('inforeq-page-caption')}
          </h1>
          <ContactForm
              requestingPage='information-request'
              gaEvent='information-request-form-submitted'/>
        </Container>
      </Layout>
  );
};

export default withLocale(informationRequest);
