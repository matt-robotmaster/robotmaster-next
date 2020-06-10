import React from 'react';
import Layout from '../../../utils/components/layout/layout';
import { getPostData } from "../../../lib/posts";
import Head from "next/head";
import {Col, Container, Row} from "react-bootstrap";
import useTranslation from "../../../utils/hooks/useTranslation";
import withLocale from '../../../utils/hocs/withLocale';
import Custom404 from "../../404";

const post = ({ postData }) => {
  if (Object.keys(postData).length === 0 && postData.constructor === Object) {
    return <Custom404/>;
  }

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
