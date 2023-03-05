express = require("express");
bodyparser = require('body-parser');
sequelize = require('./util/database ');
user = require('./models/user');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false}));

app.use((req, res, next) => {
    res.setHeader('Access-control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT , DELETE');
    next();
});

//testr routes
app.use('/users', require('./routes/users'));