import React, {useEffect} from 'react';
import withLocale from '../../../../utils/hocs/withLocale';
import useTranslation from '../../../../utils/hooks/useTranslation';
import Layout from '../../../../utils/components/layout/layout';
import {Container} from 'react-bootstrap';
import ContactForm from '../../../../utils/components/form/contact-form';
import {isLocale} from "../../../../lib/translations/types";
import Router from "next/router";
import {getInitialLocale} from "../../../../lib/translations/getInitialLocale";

const contact = () => {
  const { t, locale } = useTranslation();
  useEffect(() => {
    if (typeof window !== 'undefined' && !isLocale(locale)) {
      Router.replace(`/${getInitialLocale()}/${Router.asPath.split('/').slice(2).join('/')}`);
    }
  });

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
