const express = require('express');
const path = require('path');
const app = express();
const route = require('./routes');
const cors = require('cors');

const { engine } = require('express-handlebars');

const db = require('./config/db/index');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(cors());

db.connect();
route(app);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running in http://localhost:3000');
});
