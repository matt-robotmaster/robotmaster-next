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
        caption: t('contactmereq-page-caption')
      }}>
        <Container>
          <h1>
            {t('contactmereq-page-title')}
          </h1>
          <ContactForm
              requestingPage='contact-me'
              gaEvent='contact-me-request-form-submitted'/>
        </Container>
      </Layout>
  );
};

export default withLocale(contact);
