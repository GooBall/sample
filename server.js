const express = require('express');
const helmet = require('helmet');
const express_enforces_ssl = require('express-enforces-ssl');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();
const api = require('./api');

if (process.env.NODE_ENV === 'production') {
  app.enable('trust proxy');
  app.use(express_enforces_ssl());
  app.use(helmet());

  // Sets "Strict-Transport-Security: max-age of Sixty Days".
  app.use(
    helmet.hsts({
      maxAge: 5184000,
      includeSubDomains: false
    })
  );
}

app.get('/api/v1', (req, res) => {
  res.status(200).send(JSON.stringify({ version: 1.0 }));
});

app.get('/api/v1/instances', (req, res) => {
  api.getInstances().then(
    data => {
      res.status(200).send(data);
    },
    error => {
      res.status(500).send(error);
    }
  );
});

app.get('/api/v1/stacks', (req, res) => {
  api.getStacks().then(
    data => {
      res.status(200).send(data);
    },
    error => {
      res.status(500).send(error);
    }
  );
});

app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(serveStatic(path.join(__dirname, 'src/img')));

app.get('*', (req, res) => {
  res.status(404).send("¯\\_(ツ)_/¯ it's a hard life...");
});

let port = process.env.NODE_ENV === 'production' ? 80 : 5000;

app.listen(port);
console.log(`server started at port: ${port}`);
console.log(`server mode: ${process.env.NODE_ENV}`);
