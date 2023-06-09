const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const {
  errorHandler,
  logErrors,
  boomErrorHandler,
} = require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = [
  'http://localhost:8080',
  'https://myapp.com',
  'http://localhost:3000/',
];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  },
};

app.get('/api', (req, res) => {
  res.send('Hola mi server en express');
});

routerApi(app);

app.use(cors(options));
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port);
