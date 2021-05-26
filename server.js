const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
const path = require('path');
const jsonparser = require('./JSONparser');

// middle ware
app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(jsonparser);

/*
  1. The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report (see included sample output), where the keys of the JSON objects will be the columns of the CSV report.

  2. You may assume the JSON data has a regular structure and hierarchy (see included sample file). In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.

  3. You may also assume that child records in the JSON will always be in a property called `children`.

*/
app.get('/', (req, res) => {
  res.send('hello world :)')
})

app.get('/json', (req, res) => {
  res.send('hello world :)')
})

app.post('/json', jsonparser, (req, res) => {
  // console.log('server', req.CSV);
  res.send(JSON.stringify(req.CSV));
})

// app.get('/json', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})