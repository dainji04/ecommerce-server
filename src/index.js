const express = require('express');
const app = express();
const route = require('./routes');
const db = require('./config/db/index');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
db.connect();
route(app);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running in http://localhost:3000');
});
