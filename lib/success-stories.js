import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import {locales} from '../translations/config';

const successStoriesDirectory = path.join(process.cwd(), 'success-stories');

function getSuccessStoriesData() {
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

export function getSuccessStoriesDataByLocales() {
  const successStories = getSuccessStoriesData();
  const successStoriesByLanguages = {};
  const successStoriesByLocales = {};

  for (let i=0; i<successStories.length; i++) {
    if (successStoriesByLanguages[successStories[i].language]) {
      successStoriesByLanguages[successStories[i].language].push(successStories[i]);
    } else {
      successStoriesByLanguages[successStories[i].language] = [successStories[i]];
    }
  }

  for (let i=0; i<locales.length; i++) {
    successStoriesByLocales[locales[i]] = (successStoriesByLanguages[locales[i]]) ?
        successStoriesByLanguages[locales[i]] : successStoriesByLanguages['en']
  }

  return successStoriesByLocales;
}

export function getAllSuccessStoryPaths() {
  const fileNames = fs.readdirSync(successStoriesDirectory);
  const paths = fileNames.map(fileName => {
    return locales.map(locale => {
      return {
        params: {
          lang: locale,
          id: fileName.replace(/-..\.md$/, '')
        }
      };
    });
  });
  return [].concat(...paths).reduce((unique, o) => {
    if(!unique.some(obj => obj.params.lang === o.params.lang && obj.params.id === o.params.id)) {
      unique.push(o);
    }
    return unique;
  },[]);
}

export async function getSuccessStoryData(lang, id) {
  let fullPath = path.join(successStoriesDirectory, `${id}-${lang}.md`);
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(successStoriesDirectory, `${id}-en.md`);
  }

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
