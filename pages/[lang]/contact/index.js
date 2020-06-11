import React from 'react';
import withLocale from '../../../utils/hocs/withLocale';
import useTranslation from '../../../utils/hooks/useTranslation';
import Layout from '../../../utils/components/layout/layout';
import {Col, Container, Row} from 'react-bootstrap';
import classes from './index.module.css';
import ContactForm from '../../../utils/components/form/contact-form';

const contact = () => {
  const { t } = useTranslation();

  return (
      <Layout banner={{
        caption: t('contact-page-caption')
      }}>
        <Container>
          <Row>
            <Col md={12}>
              <h4>
                {t('contact-address-title-1')}
              </h4>
              <address>
                <span className={classes.addressFirstLine}>
                  Hypertherm Inc.
                </span><br />
                P.O. Box 5010<br />
                Hanover, NH 03755-5010
              </address>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={12}>
              <h4>
                {t('contact-address-title-2')}
              </h4>
              <address>
                <span className={classes.addressFirstLine}>
                  Hypertherm Robotic Software Inc.
                </span><br />
                5929 Rte Transcanadienne, suite 330<br />
                St. Laurent (QC)<br />
                Canada H4T 1Z6
              </address>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={12}>
              <address>
                Tel : +1 514-225-2206<br />
                Fax : +1 514-221-3661<br />
              </address>
            </Col>
          </Row>
          <h2>
            {t('inforeq-page-caption')}
          </h2>

         <ContactForm
              requestingPage='contact-page'
              gaEvent='contact-page-request-form-submitted'/>

          <hr />
          <Row>
            <Col md={12} sm={12} xs={12}>
              <h4>
                {t('contact-reseller-inq')}
              </h4>
              <p>
                {t('contact-reseller-para')}
              </p>
            </Col>
          </Row>
        </Container>
      </Layout>
  );
};

export default withLocale(contact);
