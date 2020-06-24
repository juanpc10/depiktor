// 'use strict';

const express = require('express');
const app = new express();
const morgan = require('morgan');
const cors = require('cors');


const db = require('./models');
const router = require('./router');
// const PORT = 3002;


app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(router);


// connect to the db

// const server = (async () =>{
//   try {
//     await db.sequelize.sync();
//     app.listen(PORT, () => console.log(`📣 App listening on port ${PORT}`));
//   } catch (e) {
//     console.error('😟 Error connecting to the db', e); // eslint-disable-line no-console
//   }
// })();

const { PORT = 8080 } = process.env;
const server = app.listen(PORT, () => console.log(`📣 App listening on port ${PORT}`));

module.exports = {
  server
};

// package.json
// "type": "module",
// "keywords": [
//   "ES",
//   "MODULES",
//   "NODE",
//   "MODULES",
//   "JS"
// ],