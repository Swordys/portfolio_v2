import express from 'express';
import path from 'path';
import open from 'open';

const port = process.env.PORT || 80;
const app = express();

/* eslint-disable no-console*/

app.use(express.static('dist'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
