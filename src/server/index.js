const express = require('express');
const os = require('os');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

mongoose.Promise = require('bluebird');

const DBUSER = process.env.DBUSER
const DBPASS = process.env.DBPASS

var URL = 'mongodb://' + DBUSER + ":" + DBPASS + '@ds129801.mlab.com:29801/arsalaanrehive'

console.log(URL)
mongoose.connect(URL)
    .then(() => { // if all is ok we will be here
      console.log('Start');
    })
    .catch(err => { // if error we will be here
        console.error('App starting error:', err.stack);
        process.exit(1);
    });



app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(8080, () => console.log('Listening on port 8080!'));
