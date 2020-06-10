import React from 'react';
import withLocale from '../../../../utils/hocs/withLocale';
import useTranslation from '../../../../utils/hooks/useTranslation';
import Layout from '../../../../utils/components/layout/layout';
import {Container} from 'react-bootstrap';
import ContactForm from '../../../../utils/components/form/contact-form';

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
