const express = require('express') //importing express framework for Node JS
const app = express()
const port = 3001
const db = require('./db');
let adminRoutes = require('./src/admin/admin.routes');
let loginRoutes = require("./src/login/login.routes");
const { append } = require('express/lib/response');

// CORS Middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

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

app.use('/login', loginRoutes);

app.post('/add', (req, res) => {
    
res.send('Hello World! POST NEW')

  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})