import React, { Component } from "react";
import axios from "axios";
import Date from "./Date";
import Icon from "./Icon";
import Venue from "./Venue";
import Tada from "react-reveal/Tada";
class Events extends Component {
  state = {
    event: null
  };

  componentDidMount() {
    let event_id = this.props.match.params.event_id;
    axios
      .get("https://ecell.nitrr.ac.in/events/list/2019/?format=json")
      .then(res => {
        // this.setState({
        //   event: res.data.data
        // });
        //console.log(res.data.data[0]);
        //var data_id = res.data.data.map(e => e.id);
        // if (res.data.data.id === event_id) {
        //   console.log(res.data.data);
        // }
        // data_id.forEach(e => {

        // });

        const index = res.data.data.findIndex(x => x.id == event_id);
        console.log(res.data.data[index]);
        this.setState({
          event: res.data.data[index]
        });
      });
    //console.log(this.state.event);
    //alert(event_id);
  }
  render() {
    const event_details = this.state.event ? (
      <div className="container" key={this.state.event.id}>
        <div className="post card paper">
          <div className="card-content">
            <h2 className="center">{this.state.event.name}</h2>
            <Icon icon={this.state.event.icon} />
            <div className="event-card-data row">
              <h4>{this.state.event.details}</h4>
              <div className="col s6">
                <Date
                  date={this.state.event.date}
                  time={this.state.event.time}
                />
              </div>
              <div className="col s6">
                <Venue venue={this.state.event.venue} />
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="center">
        <h3>Loading Details...</h3>
      </div>
    );
    return (
      <div>
        <Tada>{event_details}</Tada>
      </div>
    );
  }
}

export default Events;
