import {SitemapStream, streamToPromise} from "sitemap";
import { readdirSync, writeFileSync, lstatSync } from 'fs';
import { join } from 'path';
import { locales } from '../../lib/translations/config';

const baseUrl = 'https://www.robotmaster.com';
const pagesDir = 'pages/[lang]';
const publicDir = 'public';

const buildSitemapXML = async () => {
  const stream = new SitemapStream( { hostname: baseUrl } );
  const directories = getDirectories(`${process.cwd()}/${pagesDir}`);

  for (const directory of directories) {
    const dirSplit = directory.split('/');
    const url = `/${dirSplit[dirSplit.length - 2]}/${dirSplit[dirSplit.length - 1]}`;

    for (const locale of locales) {
      stream.write(
          {
            url: url.replace('[lang]', locale)
          });
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