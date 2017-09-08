const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose');
const uri = 'mongodb://admin:admin@ds127034.mlab.com:27034/hutch';

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const eventsController = require('./EventsController');

mongoose.connect(uri);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

const PORT = 3333;

app.use(express.static(path.join(__dirname, '../')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/events', eventsController.getEvents);

app.post('/addEvent', eventsController.addEvent);

app.patch('/updateEvent', eventsController.updateEvent);

app.delete('/events', eventsController.deleteEvent);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
