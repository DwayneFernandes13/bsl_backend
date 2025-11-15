const express = require('express') //importing express framework for Node JS
const app = express()
const port = 3000
const db = require('./db');
let adminRoutes = require('./src/admin/admin.routes');
const { append } = require('express/lib/response');
// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => { 
      const currentDate = new Date();
  let typerText =`${currentDate}'Hello World! Test \n gdvdfxg '`
  
  res.send(typerText)
  // res.send('Test!')
  
})

app.use('/admin', adminRoutes)
app.post('/add', (req, res) => {
    
res.send('Hello World! POST NEW')

  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})