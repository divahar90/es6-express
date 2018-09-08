import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import indexRouter from './src/api/api.routes';

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});


module.exports = app;