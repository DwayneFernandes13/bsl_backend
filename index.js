const express = require('express') //importing express framework for Node JS
const app = express()
const port = 3000
const db = require('./db');

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/add', (req, res) => {
    
// Example: Insert a new player
db('players').insert({
  name: req.body.name,
  age: req.body.age,
  position: req.body.position,
  phone: req.body.phone
})
.then(() => console.log('Player added'))
.catch(err => console.error(err))
.finally(() => db.destroy());
res.send('Hello World! POST NEW')

  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})