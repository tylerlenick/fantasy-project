const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const players = require('./routes/api/player');

//const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;


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
app.use('/api/players', players);

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));