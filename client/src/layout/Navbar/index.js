import React from "react";
import { withRouter } from "react-router";
import "./navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div id="buttonContainer">
        <button
          onClick={() => {
            this.props.history.push("/dashboard/today");
          }}
        >
          {" "}
          Today's Habits{" "}
        </button>
        <button
          onClick={() => {
            this.props.history.push("/dashboard/all");
          }}
        >
          {" "}
          All Habits{" "}
        </button>
        <button
          onClick={() => {
            this.props.history.push("/dashboard/achievements");
          }}
        >
          {" "}
          Achievements{" "}
        </button>
      </div>
    );
  }
}

export default withRouter(Navbar);
