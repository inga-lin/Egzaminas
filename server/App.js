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

////
/////505 apsirasom ko reik administratorio prisijungimui------>
const doAuth = function(req, res, next) {
  if (0 === req.url.indexOf('/admin')) {
      const sql = `
      SELECT
      name
      FROM users
      WHERE session = ?
  `;
      con.query(
          sql, [req.headers['authorization'] || ''],
          (err, results) => {
              if (err) throw err;
              if (!results.length) {
                  res.status(401).send({});
                  req.connection.destroy();
              } else {
                  next();
              }
          }
      );
  } else {
      next();
  }
}
app.use(doAuth)




app.get("/admin/hello", (req, res) => {
  res.send("Hello Admin!");
});

app.get("/login-check", (req, res) => {
  const sql = `
  SELECT
  name
  FROM users
  WHERE session = ?
  `;
  con.query(sql, [req.headers['authorization'] || ''], (err, result) => {
      if (err) throw err;
      if (!result.length) {
          res.send({ msg: 'error' });
      } else {
          res.send({ msg: 'ok' });
      }
  });
});

        
app.post("/login", (req, res) => {
  const key = uuid.v4();
  const sql = `
  UPDATE users
  SET session = ?
  WHERE name = ? AND pass = ?
`;
  con.query(sql, [key, req.body.user, md5(req.body.pass)], (err, result) => {
      if (err) throw err;
      if (!result.affectedRows) {
          res.send({ msg: 'error', key: '' });
      } else {
          res.send({ msg: 'ok', key });
      }
  });
});
/////////505 administratoriaus prisijungimo pabaiga-------------------->


app.get('/', (req, res) => {
  res.send('Hello Worldddd!')
})


app.get('/admin/knygos-manager', (req, res) => {   

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
  //Create lenteles 
app.post('/knygos-manager', (req, res) => {  
  
  const sql = `
  INSERT INTO knygos
  (vvardas, tipas, knyga)
  VALUES (?, ?, ?)
  `;
  con.query(
    sql,
    [req.body.vvardas, req.body.tipas,req.body.knyga ], 
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

app.delete('/knygos-manager/:id', (req, res) => {
  const sql = `
      DELETE FROM knygos
      WHERE id = ?
      `;
  con.query(sql, [req.params.id], (err, result) => { 
      if (err) {
          throw err;
      }
      res.send(result);
  })
})
////////////////////////////
////////////////////////////
//edit(redaguoti) mygtukas
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
/////////////////////////Fronto dalis

//a reikalingas <Link> kad all rodytu visus ManikiuroListoAtvaizdavimasFronte o :manotipas tik pagal atitinkama tipa
app.get('/knygos-list/all', (req, res) => {  
  
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

app.get("/knygos-list/:manotipas", (req, res) => { 
  if (req.params.manotipas != "all") {
  const sql = `
          SELECT
          *
          FROM knygos
          WHERE tipas = ?
      `;
  con.query(sql, [['grozinis','detektyvas','fantastika'].indexOf(req.params.manotipas) + 1], (err, result) => { 
    if (err) throw err;
    res.send(result);
  });
}
});


//202 search paiska pagal pavadinima 

app.get("/knygos-list-search", (req, res) => {
  const sql = `
        SELECT
        *
        FROM knygos
        WHERE knyga LIKE '%${req.query.s}%'
    `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
