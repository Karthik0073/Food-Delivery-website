const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const port = 3000;

const { mysqlConnection: mydb2, dbName} = require('./db');

app.use(bodyparser.json());
app.use(express.static(__dirname));
app.get('/', (req, res) => {
  res.sendFile('./OnlineFood.html', {root: __dirname })
})

app.get('/login', (req, res) => {
  res.sendFile('./login.html', {root: __dirname })
})

app.get('/about', (req, res) => {
  res.sendFile('./Introduction.html', {root: __dirname })
})

app.get('/contact', (req, res) => {
  res.sendFile('./contact.html', {root: __dirname })
})




app.get('/register', (req, res) => {
  res.sendFile('./register.html', {root: __dirname })
})
app.get('/payment', (req, res) => {
  res.sendFile('./checkout.html', {root: __dirname })
})





app.get('/api/v1/getfooditems', (req, res) => {
  mydb2.query('show tables', (err, rows, fields) => {
    if (!err)
    res.send(rows.map(row => row[`Tables_in_${dbName}`]));
    else
    console.log(err);
    })
})
app.get('/api/v1/getfooditem/:name', (req, res) => {
  mydb2.query('SELECT * FROM '+ req.params.name, (err, rows, fields) => {
    if (!err){
      res.send(rows);
    }
    else{
      res.status(404).send('Cannot find item ' + req.params.name);
    }
    })
})



app.listen(port, () => {
  console.log(`Food delivery app listening on port ${port}`)
});