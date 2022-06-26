const express = require('express');
const app = express();
const port = 3003;
const cors = require('cors'); 
app.use(cors());
const mysql = require('mysql');
md5 = require('js-md5'); 
const uuid = require('uuid');

app.use(express.json({limit: '50mb'}));//606 per cia bus galima didele foto ideti
app.use(express.urlencoded({limit: '50mb'}));//606 per cia bus galima didele foto ideti

app.use(express.urlencoded({//1
    extended: true
}));
    
app.use(express.json());//1

const con = mysql.createConnection({ //1
    host: 'localhost',
    user: 'root',
    password: '',
    database: '',   
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
