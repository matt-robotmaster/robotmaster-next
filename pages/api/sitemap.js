import {SitemapStream, streamToPromise} from "sitemap";
import { readdirSync, writeFileSync, lstatSync } from 'fs';
import { join } from 'path';
import { locales } from '../../lib/translations/config';
import { getAllPostPaths } from "../../lib/posts";
import { getAllSuccessStoryPaths } from "../../lib/success-stories";

const baseUrl = 'https://www.robotmaster.com';
const pagesDir = 'pages/[lang]';
const publicDir = 'public';

const buildSitemapXML = async () => {
  const stream = new SitemapStream( { hostname: baseUrl } );
  const pageDirs = getDirectories(`${process.cwd()}/${pagesDir}`);

  for (const pageDir of pageDirs) {
    const dirSplit = pageDir.split('/');
    const page = dirSplit[dirSplit.length - 1];

    let hreflang = [];

    for (const locale of locales) {
      hreflang.push({
        lang: locale,
        url: `/${locale}/${page}`
      });
    }
    for (const locale of locales) {
      stream.write(
          {
            url: `/${locale}/${page}`,
            links: hreflang
          });
    }

    if (page === 'newsroom') {
      const posts = getAllPostPaths();

      for (const post of posts) {
        const postId = post.params.id;

        hreflang = [];
        for (const locale of locales) {
          hreflang.push({
            lang: locale,
            url: `/${locale}/${page}/${postId}`
          });
        }

        stream.write(
            {
              url: `/${post.params.lang}/${page}/${postId}`,
              links: hreflang
            });
      }

    } else if (page === 'success-stories') {
      const successStories = getAllSuccessStoryPaths();

      for (const successStory of successStories) {
        const successStoryId = successStory.params.id;

        hreflang = [];
        for (const locale of locales) {
          hreflang.push({
            lang: locale,
            url: `/${locale}/${page}/${successStoryId}`
          });
        }

        stream.write(
            {
              url: `/${successStory.params.lang}/${page}/${successStoryId}`,
              links: hreflang
            });
      }
    }
  }

  stream.end();
  const sitemap = await streamToPromise( stream );
  writeFileSync(`${publicDir}/sitemap.xml`, sitemap.toString());
};

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
    readdirSync(source).map(name => join(source, name)).filter(isDirectory);

export default async (req, res) => {
  try {
    await buildSitemapXML();
    res.send(200);
  } catch (e) {
    res.send(500);
  }

};