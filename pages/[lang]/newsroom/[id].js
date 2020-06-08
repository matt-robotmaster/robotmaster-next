import React from 'react';
import Layout from '../../../components/layout/layout';
import { getPostData } from "../../../lib/posts";
import Head from "next/head";
import {Col, Container, Row} from "react-bootstrap";
import useTranslation from "../../../hooks/useTranslation";
import withLocale from '../../../hocs/withLocale';

const post = ({ postData }) => {
  const { t } = useTranslation();
  return (
      <Layout banner={{
        caption: t('blog-page-caption')
      }}>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <Container>
          <Row>
            <Col md={12}>
              <div className="blog-post">
                <h1>
                  {postData.title}
                </h1>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
  );
};

post.getInitialProps = async (ctx) => {
  let postData = {};
  try {
    postData = await getPostData(ctx.query.id);
  } catch {
    ctx.res.statusCode = 404;
  }
  return {
    postData
  };
};

//TODO: solve static rendering with HOC, withLocale is needed to translate to other languages
export default withLocale(post);
