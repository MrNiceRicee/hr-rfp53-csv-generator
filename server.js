const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/src/')));

app.get('/', (req, res) => {
  res.send('hello world :)')
})

app.get('/json', (req, res) => {
  res.send('hello world :)')
})

app.post('/json', (req, res) => {
  console.log(req.body);
  res.send('from server');
})

// app.get('/json', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})