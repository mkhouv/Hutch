import React, { Component } from 'react';

class Modal extends React.Component {

  render() {

    return (
      <div id="myModal" className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 className="modal-title">Add Event</h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label className="control-label">Date</label>
                <input className="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="text"/>
              </div>
              <form className="form-group">
                <label className="mr-sm-2">Conference Room </label>
                <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="resource-id">
                  <option value="Choose...">Choose...</option>
                  <option value="Room A">Room A</option>
                  <option value="Room B">Room B</option>
                  <option value="Room C">Room C</option>
                  <option value="Room D">Room D</option>
                </select>
              </form>
              <form className="form-inline">
                <label className="mr-sm-2">Start Time </label>
                <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="start-time">
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
                <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="end-time">
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
                  <input type="text" className="form-control" id="title" placeholder="Event Title"></input>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={this.props.newEvent} data-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
