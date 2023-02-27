const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Middlewares


// Routes
app.use(require('./routes/router'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Listening the Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});