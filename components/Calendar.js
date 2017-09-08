import React, { Component } from 'react';
import axios from 'axios'

class Calendar extends Component {

  componentDidMount(){
    const { calendar } = this.refs;
    axios.get('http://localhost:3333/events')
    .then(res => {
      $(calendar).fullCalendar({
        defaultView: 'agendaDay',
        defaultDate: moment(new Date()).format('YYYY-MM-DD'),
        editable: false,
        selectable: true,
        eventLimit: true, 
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'agendaDay,agendaTwoDay,agendaWeek,month'
        },
        views: {
          agendaTwoDay: {
            type: 'agenda',
            duration: { days: 2 },
  
            groupByResource: true
          }
        },
  
        resources: [
          { id: 'Room A', title: 'Room A', eventColor: 'purple' },
          { id: 'Room B', title: 'Room B', eventColor: 'green' },
          { id: 'Room C', title: 'Room C', eventColor: 'orange' },
          { id: 'Room D', title: 'Room D', eventColor: 'red' }
        ],
        events: res.data,
  
        select: function (start, end, jsEvent, view, resource) {
          console.log(
            'select',
            start.format(),
            end.format(),
            resource ? resource.id : '(no resource)'
          );
        },
        eventClick: this.props.clickEvent,
        dayClick: function (date, jsEvent, view, resource) {
          console.log(
            'dayClick',
            date.format(),
            resource ? resource.id : '(no resource)'
          );
        }
      });
    });
  }

  render() {
    return (
      <div ref='calendar' id='calendar'></div>
    );
  }

}

export default Calendar;