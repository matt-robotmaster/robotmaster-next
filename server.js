const express = require('express')
import next from 'next';
import nextI18NextMiddleware from 'next-i18next/middleware';

import NextI18NextInstance from './i18n';

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  await NextI18NextInstance.initPromise;
  server.use(nextI18NextMiddleware(NextI18NextInstance));

  server.get('*', (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})()