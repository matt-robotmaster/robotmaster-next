import React from 'react';
import Layout from '../../../components/layout/layout';
import { getAllPostPaths, getPostData } from "../../../lib/posts";
import Head from "next/head";
import {Col, Container, Row} from "react-bootstrap";

const post = ({ postData }) => {
  return (
      <Layout>
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

export async function getStaticPaths() {
  const paths = getAllPostPaths();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  };
}

export default post;
