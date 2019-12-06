const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const itemsRouter = require('./routes/API/items');

app.use(cors());
app.use(express.json()); //The new way to use Body Parser

const db = require('./config/keys').mongoURI;
//Deploying to Heroku requires the process.env.port
const port = process.env.PORT || 5000;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongo DB Connected"))
  .catch(err => console.log(err))

// Use routes
app.use('/api/items', itemsRouter);

app.listen(port, () => console.log(`Connected to port ${port}`));