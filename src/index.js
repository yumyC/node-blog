const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")

const index = require('./router/article')

const corsOptions = {
  origin: "*"
};
const app = express()
const port = 3000

app.use(cors(corsOptions));

// content-type：application/json
app.use(bodyParser.json());
// content-type：application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const db = require("./models");
db.sequelize.sync();
// console.log(index.route());
// routes
app.use(index.router)
