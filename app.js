const express = require('express');
const user = require('./controllers/user');
var bodyParser = require('body-parser');
const db = require('./config/database');
const app = express();

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));

app.use('/api/user', user);

db.databaseConf.sync();

app.listen(8080, () => {
    console.log("Server is listening at port 8080");
});