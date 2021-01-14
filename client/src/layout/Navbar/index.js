import React from "react";
import { withRouter } from "react-router";
import "./navbar.css";

import { Link, Route, Switch } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div id="buttonContainer">
        <button
          onClick={() => {
            <Link to={"/dashboard/today"} />;
          }}
        >
          {" "}
          Today's Habits{" "}
        </button>

        <Link to={"/dashboard/all"}> All Habits </Link>

        <button>{<Link to={"/dashboard/achievements"} />}Achievements</button>
      </div>
    );
  }
}

export default withRouter(Navbar);
