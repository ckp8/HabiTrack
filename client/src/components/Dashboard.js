import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import moment from "moment";
// import Navbar from "../layout/Navbar";
// import { Switch, Route } from "react-router-dom";
import TodayHabits from "./TodayHabits";
import AllHabits from "./AllHabits";
import Achievements from "./Achievements";
import "./dashboard.css";
// import Modal from "react-modal";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:3000/dashboard/", {
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

  const [modalState1, setModalState1] = useState(false);

  const manageState1 = () => {
    setModalState1(!modalState1);
  };

  const [modalState2, setModalState2] = useState(false);

  const manageState2 = () => {
    setModalState2(!modalState2);
  };

  const [modalState3, setModalState3] = useState(false);

  const manageState3 = () => {
    setModalState3(!modalState3);
  };

  return (
    <div className="dashboard">
      <h1 className="mt-5">Dashboard</h1>
      <h2>Welcome {name}</h2>
      <button onClick={(e) => logout(e)} className="btn btn-primary">
        Logout
      </button>
      <button onClick={() => manageState1()}>Today's Habits</button>
      <button onClick={() => manageState2()}>All Habits</button>
      <button onClick={() => manageState3()}>Achievements</button>
      <div className={`modalBackground modalShowing-${modalState1}`}>
        {<TodayHabits />}
      </div>
      <div className={`modalBackground modalShowing-${modalState2}`}>
        {<AllHabits />}
      </div>
      <div className={`modalBackground modalShowing-${modalState3}`}>
        {<Achievements />}
      </div>
    </div>
  );
};

export default Dashboard;
