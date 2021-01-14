import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import moment from "moment";
// import Navbar from "../layout/Navbar";
// import { Switch, Route } from "react-router-dom";
import TodayHabits from "./TodayHabits";
import AllHabits from "./AllHabits";
import Achievements from "./Achievements";
import newHabit from "./newHabit";
import "./dashboard.css";
// import Modal from "react-modal";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:3000/dashboard/name", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseData = await res.json();
      // console.log(parseData);
      setName(parseData.username);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      // toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const [state, setState] = useState();

  const currentState = (modal) => {
    setState(modal);
  };

  const display = () => {
    switch (state) {
      case "modal1":
        return <TodayHabits />;
      case "modal2":
        return <AllHabits />;
      case "modal3":
        return <Achievements />;
      case "modal4":
          return <newHabit />;
      default:
        return <TodayHabits />;
    }
  };

  return (
    <div className="dashboard">
      <h1 className="mt-5">
        Welcome {name.charAt(0).toUpperCase() + name.slice(1)}
      </h1>
      <button onClick={(e) => logout(e)} className="btn btn-primary">
        Logout
      </button>
      <button onClick={() => currentState("modal1")}>Today's Habits</button>
      <button onClick={() => currentState("modal2")}>All Habits</button>
      <button onClick={() => currentState("modal3")}>Achievements</button>
      <button onClick={() => currentState("modal4")}>New Habit!</button>
      <div>{display()}</div>
    </div>
  );
};

export default Dashboard;
