const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3001;
const team = 0//include routes when created;

const app = express();

//Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json);

const db = require('./config/keys').mongoURI;

//Mongoose Connection
mongoose
    .connect(db)
    .then(() => console.log("MongoDB connected...."))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/team', team);

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}



app.listen(port, () => console.log(`Server started on port ${port}`));