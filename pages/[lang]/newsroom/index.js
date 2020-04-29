import React from 'react';
import withLocale from '../../../hocs/withLocale';
import Layout from '../../../components/layout/layout';
import useTranslation from '../../../hooks/useTranslation';
import classes from './index.module.css';
import {getSortedPostsData} from "../../../lib/posts";
import Link from "next/link";
import {Container} from "react-bootstrap";

const newsroom = ({posts}) => {
  const { locale, t } = useTranslation();

  return (
      <Layout>
        <Container>
          {posts.map(post => post.link ? (
              <div className={classes.blogPostSummary} key={post.altLink || post.link}>
                <hr className={classes.blogPostSummaryHr} />
                <h3 className={classes.blogPostSummaryH3}>
                  {post.title}
                </h3>
                <div className={classes.blogPostSummaryDiv}>
                  <p className={classes.blogPostSummaryP}
                     dangerouslySetInnerHTML={{
                       __html: post.summary,
                     }} />
                </div>
                <img className={classes.blogPostSummaryImg} src={post.preview} />
                <br />
                <Link href={`/${locale}/newsroom/${post.link}`} passHref>
                  <a
                      className={`btn btn-primary ${classes.blogPostSummaryA}`}
                      role="button">
                    {t('general-read-more')}
                  </a>
                </Link>
              </div>
          ) : null)}
          <hr className={classes.blogPostSummaryHr} />
        </Container>
      </Layout>
  );
};

newsroom.getInitialProps = async () => {
  const posts = await getSortedPostsData();
  return {
    posts
  };
};

export default withLocale(newsroom);
