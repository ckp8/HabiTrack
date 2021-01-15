import React from "react";
import moment from "moment";
import "./todayhabits.css";
import Habit from "../Habit";

class TodayHabits extends React.Component {
  // This component will show the habits that the user has to complete this specific day
  // To do this we need to make a api call to get all habits where they have the respective day as true in the sql
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.user_id,
      dailyHabits: [],
    };
  }

  componentDidMount() {
    console.log(this.state);
    this.fetchHabits(this.state.user_id);
  }

  //   getProfile = async () => {
  //     try {
  //       const res = await fetch("http://localhost:3000/dashboard/name", {
  //         method: "GET",
  //         headers: { token: localStorage.token },
  //       });

  //       const parseData = await res.json();
  //       // setName(parseData.username);
  //       // setUser_id(parseData.id);
  //       this.setState({ user_id: parseData.id });
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //   };

  async fetchHabits(id) {
    try {
      const resp = await fetch(`http://localhost:3000/users/${id}`, {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const data = await resp.json();
      if (data.status === 500) {
        throw Error("Habits not found");
      }
      this.setState({ dailyHabits: data });
      console.log(data);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  //for each habit, it will display a new habit component
  //we need to pass a prop to each habit component containing that habit's id and title

  render() {
    const renderhabits = this.state.dailyHabits.map((habit) => {
      // let habitID = habit.habit_id;
      // let habitTitlte = habit.title;
      return (
        <div key={habit.habit_id}>
          <Habit title={habit.title} habitID={habit.habit_id} />
        </div>
      );
    });

    return (
      <div id="dailyHabits">
        {moment().format("dddd")}, <br />
        {moment().format("Do MMMM YYYY")} <br />
        {moment().format("MMMM Do YYYY, h:mm:ss a")} <br />
        {renderhabits}
        {/* <button onClick={() => { history.push(`/newHabit`); }} > Add a habit! </button> */}
      </div>
    );
  }
}

export default TodayHabits;
