import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import axios from 'axios';
import Modal from './Modal';
import EditModal from './EditModal';
import Nav from './Nav';
import Calendar from './Calendar';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      month: moment(),
      selected: moment().startOf('day'),
      calEvent: {}
    };
    
    this.newEvent = this.newEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.clickEvent = this.clickEvent.bind(this);
  }

  newEvent() {
    let date, start, end, resourceId, title;
    date = moment($('#date').val()).format('YYYY-MM-DD');
    start = moment($('#start-time :selected').text(), ["h:mm A"]).format('HH:mm:ss');
    end = moment($('#end-time :selected').text(), ["h:mm A"]).format('HH:mm:ss');
    resourceId = $('#resource-id :selected').text();
    title = $('#title').val();

    if (date && start && end && resourceId && title) {
      if (start.substring(0,2) < end.substring(0,2)) {
        axios.post('http://localhost:3333/addEvent',
          {
            date: date,
            resourceId: resourceId,
            start: date + 'T' + start,
            end: date + 'T' + end,
            title: title
          }
        ).then(res => {
          if (res.data === 'overlap') alert('This booking overlaps with another scheduled booking');
          location.reload();
        });
      }
      else {
        alert('INVALID TIME ENTRY. Please try again');
      }
    }
    else {
      alert('Please fill in all fields');
    }
  }

  

  deleteEvent() {
    let date = this.state.selected.format('MMDDYYYY');
    let that = this;
    axios.delete(`http://localhost:3333/${date}`).then(function () {
      that.getEvents(date);
    });
  }
  clickEvent(calEvent, jsEvent, view) {
    this.setState({calEvent: calEvent});
    $('#editModal').modal('show');
  }

  render() {
    return (
      <div>
        <Modal newEvent={this.newEvent} />
        <EditModal event={this.state.calEvent}/>
        <Nav />
        <Calendar clickEvent={this.clickEvent} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
