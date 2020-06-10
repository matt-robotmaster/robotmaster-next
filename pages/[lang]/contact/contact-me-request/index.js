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
