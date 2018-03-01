const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080 || process.env.PORT;

app.set('view engine', 'html')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./server/routes/index')(app);

app.listen(port, () => {
  console.log('Listening on port', port);
});