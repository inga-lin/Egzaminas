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
    database: 'egzaminas',   
});

app.get('/', (req, res) => {
  res.send('Hello Worldddd!')
})


app.get('/knygos-manager', (req, res) => {    //1-pati pradzia     <- http://localhost:3003/trees-manager api puslapio pavadinimas
  // SELECT column1, column2, ...
  // FROM table_name;       trees <- lenteles pavadinimas(issitrint komentara sita nes nepasileis)
  const sql = `
  SELECT
  *
  FROM knygos
  `;
  con.query(sql, function(err, result) {
  if (err) throw err;
  res.json(result);
  });
});


////////////////////////////
/////////////////////////
  //Create lenteles itasymas
  //3.mygtuko paspaudimas- kuris is Create.jsx paims informaciaj (kai paspausim mygtuka) ir ja issius ir irasys i serveri////
//3.Create.jsx info isaugojimas serveryje
app.post('/knygos-manager', (req, res) => { //2 bendraujam su serveriu   //1-pati pradzia     <- http://localhost:3003/trees-manager api puslapio pavadinimas
  
  const sql = `
  INSERT INTO knygos
  (vvardas, tipas, knyga)
  VALUES (?, ?, ?)
  `;
  con.query(
    sql,
    [req.body.vvardas, req.body.tipas,req.body.knyga ], //jeigu tuscias trukmes ir kaina laukelis bus 0
    (err, results) => {
      if (err) {
        throw err;
      }
      res.send(results);
    }
  );
});
////////////////////////////
////////////////////////////
//deletle-mygtukas
////6.Istrinimo mygtukas is ManikiuroListoAtvaizdavimas.jsx kuris istrins visa jo info///
app.delete('/knygos-manager/:id', (req, res) => { //delytinam is trees lnteles kurio id yra ?(kazkoks)
  const sql = `
      DELETE FROM knygos
      WHERE id = ?
      `;
  con.query(sql, [req.params.id], (err, result) => { //[req.params.id] yra = '/trees-manager/:id'
      if (err) {
          throw err;
      }
      res.send(result);
  })
})
////////////////////////////
////////////////////////////
//edit(redaguoti) mygtukas
////8.Create paspaudus redaguoti(edit) Modale keiciami duomenys ir atvaizduojami Creat o liste/////
//buvo tik saugojimas be nuotraukos MODALO
app.put("/knygos-manager/:id", (req, res) => {
const sql = `
UPDATE knygos
SET vvardas = ?, tipas = ?, knyga = ?
WHERE id = ?
`;
  con.query(
  sql,
  [req.body.vvardas, req.body.tipas, req.body.knyga, req.params.id],
  (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  }
);
});
/////////////////////////
//////////////////////////

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
