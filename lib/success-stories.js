import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import {locales} from '../translations/config';

const successStoriesDirectory = path.join(process.cwd(), 'success-stories');

export function getSuccessStoriesData() {
  const fileNames = fs.readdirSync(successStoriesDirectory);
  return fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(successStoriesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data
    };
  });
}

export function getAllSuccessStoryPaths() {
  const fileNames = fs.readdirSync(successStoriesDirectory);
  const paths = fileNames.map(fileName => {
    return locales.map(locale => {
      return {
        params: {
          lang: locale,
          id: fileName.replace(/\.md$/, '')
        }
      };
    });
  });
  return [].concat(...paths);
}

export async function getSuccessStoryData(id) {
  const fullPath = path.join(successStoriesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
  .use(html)
  .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data
  };
}
