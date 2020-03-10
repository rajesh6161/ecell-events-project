import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import Sample from "./Sample";
import Events from "./components/Events";
import Navbar from "./components/Navbar";
import Zoom from "react-reveal/Zoom";
import Tada from "react-reveal/Tada";
import Bounce from "react-reveal/Bounce";
import RubberBand from "react-reveal/RubberBand";
class App extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios
      .get("https://ecell.nitrr.ac.in/events/list/2019/?format=json")
      .then(res =>
        this.setState({
          posts: res.data.data
        })
      );
  }
  render() {
    const { posts } = this.state;
    const dataList = posts.length ? (
      posts.map(post => {
        return (
          <div key={post.id}>
            <Bounce left>
              <div className="post card">
                <div className="card-content">
                  <Link to={"/" + post.id}>
                    <span className="card-title">{post.name}</span>
                  </Link>

                  <Sample datas={post} />
                </div>
              </div>
            </Bounce>
          </div>
        );
      })
    ) : (
      <Tada>
        <h3 className="center">Loading Data...</h3>
      </Tada>
    );

    return (
      <div className="App container">
        <Navbar />
        <RubberBand>
          <h1 className="ecell center">Ecell Events</h1>
        </RubberBand>

        {dataList}
        {/* <Events /> */}
      </div>
    );
  }
}

export default App;
