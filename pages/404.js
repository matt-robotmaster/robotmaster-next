import React from 'react';
import useTranslation from "../hooks/useTranslation";
import Layout from "../components/layout/layout";
import {Col, Container, Row} from "react-bootstrap";
import Link from "next/link";

const Custom404 = () => {
  const { t, locale } = useTranslation();

  return (
      <Layout banner={{
        caption: t('notfound-page-caption')
      }}>
        <Container>
          <Row>
            <Col md={12}>
              {t('notfound-page-message')}
            </Col>
            <Link href={`/${locale}/`} passHref>
              <a className="btn btn-primary btn-lg" >
                {t('notfound-page-homepage-button')}
              </a>
            </Link>
          </Row>
        </Container>
      </Layout>
  )
};

//TODO: custom404 cannot be used with HOC now (getInitialProps problem), withLocale is needed to translate to other languages
export default Custom404;