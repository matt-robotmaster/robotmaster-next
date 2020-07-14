import React, {useEffect} from 'react';
import withLocale from '../../../utils/hocs/withLocale';
import Layout from '../../../utils/components/layout/layout';
import useTranslation from '../../../utils/hooks/useTranslation';
import classes from './index.module.css';
import {getSortedPostsData} from "../../../lib/posts";
import Link from "next/link";
import {Container} from "react-bootstrap";
import {isLocale} from "../../../lib/translations/types";
import Router from "next/router";
import {getInitialLocale} from "../../../lib/translations/getInitialLocale";

const newsroom = ({posts}) => {
  const { t, locale } = useTranslation();
  useEffect(() => {
    if (typeof window !== 'undefined' && !isLocale(locale)) {
      Router.replace(`/${getInitialLocale()}/${Router.asPath.split('/').slice(2).join('/')}`);
    }
  });

  return (
      <Layout banner={{
        caption: t('blog-page-caption')
      }}>
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
                <Link href={`/[lang]/newsroom/[id]`} as={`/${locale}/newsroom/${post.link}`} passHref>
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
