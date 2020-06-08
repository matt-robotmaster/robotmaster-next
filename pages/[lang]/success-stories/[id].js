import React from 'react';
import Layout from '../../../components/layout/layout';
import {getSuccessStoryData} from "../../../lib/success-stories";
import Head from "next/head";
import {Col, Container, Row} from "react-bootstrap";
import useTranslation from "../../../hooks/useTranslation";
import withLocale from '../../../hocs/withLocale';

const successStory = ({ successStoryData }) => {
  const { t } = useTranslation();
  return (
      <Layout banner={{
        caption: t('success-page-caption')
      }}>
        <Head>
          <title>{successStoryData.title}</title>
        </Head>
        <Container>
          <Row>
            <Col md={12}>
              <div className="blog-post">
                <div dangerouslySetInnerHTML={{ __html: successStoryData.contentHtml }} />
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
  );
};

successStory.getInitialProps = async (ctx) => {
  console.log(ctx.query);
  const successStoryData = await getSuccessStoryData(ctx.query.lang, ctx.query.id);
  return {
      successStoryData
  };
};

export default withLocale(successStory);
