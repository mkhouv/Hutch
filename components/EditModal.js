import React, { Component } from 'react';
import axios from 'axios';

class EditModal extends React.Component {

  constructor(props) {
    super(props);
    
    this.updateEvent = this.updateEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }
  

  componentWillReceiveProps(newProps) {
    var temp = newProps.event;
    var resourceId = document.getElementById('updated-resource-id');
    
    for(var i, j = 0; i = resourceId.options[j]; j++) {
        if(i.value == temp.resourceId) {
            resourceId.selectedIndex = j;
            break;
        }
    }
    var startTime = document.getElementById('updated-start-time');
    
    for(var i, j = 0; i = startTime.options[j]; j++) {
        if(i.value == moment(temp.start).format('HH')) {
            startTime.selectedIndex = j;
            break;
        }
    }

    var endTime = document.getElementById('updated-end-time');
    
    for(var i, j = 0; i = endTime.options[j]; j++) {
        if(i.value == moment(temp.end).format('HH')) {
            endTime.selectedIndex = j;
            break;
        }
    }

    var title = document.getElementById('updated-title');
    title.value = temp.title;
  }

  updateEvent() {
    let date, start, end, resourceId, title;
    date = moment($('#updated-date').val()).format('YYYY-MM-DD');
    start = moment($('#updated-start-time :selected').text(), ["h:mm A"]).format('HH:mm:ss');
    end = moment($('#updated-end-time :selected').text(), ["h:mm A"]).format('HH:mm:ss');
    resourceId = $('#updated-resource-id :selected').text();
    title = $('#updated-title').val();

    if (date && start && end && resourceId && title) {
      if (start.substring(0,2) < end.substring(0,2)) {
        axios.patch('http://localhost:3333/updateEvent',
          {
            _id: this.props.event._id,
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
    axios.delete('http://localhost:3333/events',
      {
        params: {
          _id: this.props.event._id
        }
      }
    ).then(res => {
      if (res.data === 'deleted') alert('Your booking has been deleted');
      location.reload();
    });
  }

  render() {
    return (
      <div id="editModal" className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 className="modal-title">Edit Event</h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label className="control-label">Date</label>
                <input className="form-control" id="updated-date" name="date" placeholder="MM/DD/YYY" type="text" value={moment(this.props.event.date).format('MM/DD/YYYY')}/>
              </div>
              <form className="form-group">
                <label className="mr-sm-2">Conference Room </label>
                <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="updated-resource-id">
                  <option value="Choose...">Choose...</option>
                  <option value="Room A">Room A</option>
                  <option value="Room B">Room B</option>
                  <option value="Room C">Room C</option>
                  <option value="Room D">Room D</option>
                </select>
              </form>
              <form className="form-inline">
                <label className="mr-sm-2">Start Time </label>
                <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="updated-start-time">
                  <option value="Choose...">Choose...</option>
                  <option value="00">12:00 AM</option>
                  <option value="01">1:00 AM</option>
                  <option value="02">2:00 AM</option>
                  <option value="03">3:00 AM</option>
                  <option value="04">4:00 AM</option>
                  <option value="05">5:00 AM</option>
                  <option value="06">6:00 AM</option>
                  <option value="07">7:00 AM</option>
                  <option value="08">8:00 AM</option>
                  <option value="09">9:00 AM</option>
                  <option value="10">10:00 AM</option>
                  <option value="11">11:00 AM</option>
                  <option value="12">12:00 PM</option>
                  <option value="13">1:00 PM</option>
                  <option value="14">2:00 PM</option>
                  <option value="15">3:00 PM</option>
                  <option value="16">4:00 PM</option>
                  <option value="17">5:00 PM</option>
                  <option value="18">6:00 PM</option>
                  <option value="19">7:00 PM</option>
                  <option value="20">8:00 PM</option>
                  <option value="21">9:00 PM</option>
                  <option value="22">10:00 PM</option>
                  <option value="23">11:00 PM</option>
                </select>
                <label className="mr-sm-2">End Time </label>
                <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="updated-end-time">
                  <option value="Choose...">Choose...</option>
                  <option value="00">12:00 AM</option>
                  <option value="01">1:00 AM</option>
                  <option value="02">2:00 AM</option>
                  <option value="03">3:00 AM</option>
                  <option value="04">4:00 AM</option>
                  <option value="05">5:00 AM</option>
                  <option value="06">6:00 AM</option>
                  <option value="07">7:00 AM</option>
                  <option value="08">8:00 AM</option>
                  <option value="09">9:00 AM</option>
                  <option value="10">10:00 AM</option>
                  <option value="11">11:00 AM</option>
                  <option value="12">12:00 PM</option>
                  <option value="13">1:00 PM</option>
                  <option value="14">2:00 PM</option>
                  <option value="15">3:00 PM</option>
                  <option value="16">4:00 PM</option>
                  <option value="17">5:00 PM</option>
                  <option value="18">6:00 PM</option>
                  <option value="19">7:00 PM</option>
                  <option value="20">8:00 PM</option>
                  <option value="21">9:00 PM</option>
                  <option value="22">10:00 PM</option>
                  <option value="23">11:00 PM</option>
                </select>
              </form>
              <form>
                <div className="form-group">
                  <label>Event Title</label>
                  <input type="text" className="form-control" id="updated-title" ></input>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" id="danger" onClick={this.deleteEvent} data-dismiss="modal">Delete</button>
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={this.updateEvent} data-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditModal;
