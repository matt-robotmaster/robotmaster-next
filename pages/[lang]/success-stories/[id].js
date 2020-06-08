import React from 'react';
import Layout from '../../../components/layout/layout';
import { getSuccessStoryData } from "../../../lib/success-stories";
import Head from "next/head";
import {Col, Container, Row} from "react-bootstrap";
import useTranslation from "../../../hooks/useTranslation";
import withLocale from '../../../hocs/withLocale';
import Custom404 from '../../404';

const successStory = ({ successStoryData }) => {
  if (Object.keys(successStoryData).length === 0 && successStoryData.constructor === Object) {
    return <Custom404/>;
  }

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
  let successStoryData = {};
  try {
    successStoryData = await getSuccessStoryData(ctx.query.lang, ctx.query.id);
  } catch {
    ctx.res.statusCode = 404;
  }
  return {
      successStoryData
  };
};

//TODO: solve static rendering with HOC, withLocale is needed to translate to other languages
export default withLocale(successStory);
