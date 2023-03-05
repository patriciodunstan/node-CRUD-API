const sequilize = require("./util/database ");

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

//test routes
app.get('/', (req, res, next) => {
    res.send('Hello World');
});


//CRUD routes
app.use('/users', require('./routes/users'));

//error handling
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({message : message});
});

//sync database
sequilize
    .sync()
    .then(result => {
        console.log("Database connected");
        app.listen(3000);
    })
    .catch(err => console.log(err));

