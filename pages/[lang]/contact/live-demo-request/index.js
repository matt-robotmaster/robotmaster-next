import React from 'react';
import withLocale from './../../../../hocs/withLocale';
import useTranslation from './../../../../hooks/useTranslation';
import Layout from './../../../../components/layout/layout';
import {Container} from 'react-bootstrap';
import ContactForm from './../../../../components/form/contact-form';

const contact = () => {
  const { t } = useTranslation();

  return (
      <Layout banner={{
        caption: t('livedemoreq-page-caption')
      }}>
        <Container>
          <h1>
            {t('livedemoreq-page-title')}
          </h1>
          <ContactForm
              requestingPage='live-demo'
              gaEvent='live-demo-request-form-submitted'/>
        </Container>
      </Layout>
  );
};

export default withLocale(contact);
