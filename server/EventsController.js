const Events = require('./EventsModel');
const mongoose = require('mongoose');
const moment = require('moment');
const EventsController = {

  getEvents(req, res, next) {
    Events.find({}, (err, events) => {
      if (err) {
        throw err;
      } else {
        res.json(events);
      }
    })
  },
  updateEvent(req, res, next) {
    console.log(req.body)
    Events.find(req.body.date, (err, data) => {
      let overlap = false;
      data.forEach(event => {
        if (req.body.resourceId === event.resourceId) {
          if(req.body.start.substring(11, 13) < event.start.substring(11, 13) && req.body.end.substring(11, 13) > event.start.substring(11, 13) || req.body.start.substring(11, 13) > event.start.substring(11, 13) && req.body.start.substring(11, 13) < event.end.substring(11, 13)) {
            console.log('OVERLAPPPPP')
            overlap = true;
          }
        }
      });
      if (!overlap) {
        Events.findOneAndUpdate({ _id: req.body._id }, req.body, (err, event) => {
          if (err) {
            throw err;
          } else {
            res.json(event);
          }
        });
      }
      if (overlap) {
        res.send('overlap');
      }
    })
  },

  addEvent(req, res, next) {
    Events.find(req.body.date, (err, data) => {
      let overlap = false;
      data.forEach(event => {
        if (req.body.resourceId === event.resourceId) {
          if(req.body.start.substring(11, 13) < event.start.substring(11, 13) && req.body.end.substring(11, 13) > event.start.substring(11, 13) || req.body.start.substring(11, 13) > event.start.substring(11, 13) && req.body.start.substring(11, 13) < event.end.substring(11, 13)) {
            overlap = true;
          }
        }
      });
      if (!overlap) {
        Events.create(req.body, (err, event) => {
          console.log(event)
          if (err) {
            res.status(418).json(err);
          } else {
            res.status(200).json(event);
          }
          return;
        })
      }
      if (overlap) {
        res.send('overlap');
      }
    })
  },
  deleteEvent(req, res) {
    Events.deleteOne({ _id: req.query._id }, (err, event) => {
      if (event.deletedCount == 1) {
        res.status(200).send('deleted');
      } else {
        res.status(418).send(err);
      }
    })
  },
};

module.exports = EventsController;
