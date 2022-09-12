import express from 'express';

/** Get Router */
import router from './router/router.js';
/** exit Router */

// use mongodb
import mongoose from 'mongoose';

// connect ke database mongoDB
mongoose.connect("mongodb://localhost:27017/restful_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database Connected'));

const app = express();

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
//     // parse application/json
// app.use(bodyParser.json());

app.use(express.json());

/** REGISTER ROUTER */
app.use(router);

app.listen('3000', () => {
    console.log('Server Running at http://localhost:3000')
})