const express = require("express"),
      app = express(),
      port = 3000,
      mongoose = require("mongoose"),
  

app.use(cors({
  origin: '*'
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT,PATCH')
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") {
    req.header('Access-Control-Allow-Methods', 'PUT,POST,GET,PATCH,DELETE,')
    return res.status(200).json({});
  }
  next();
});


app.use(bodyPar.urlencoded({ extended: true }));
app.use(bodyPar.json());

const url = // URL OF DATABASE  HERE // 

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(url, connectionParams)
  .then(() => {
    console.log('Connected to database yes this is the database')
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  })

app.get('/server', (req, res) => {
  res.send({
    code: 200,
    status: "OK",
    message: "Connected to server"
  })
})


var server = app.listen(3000);

console.log("Server started on: " + 3000);

