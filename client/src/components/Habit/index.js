import React from "react";
import "./habit.css";

class Habit extends React.Component {
  //this habit object requires a prop name habit from the components TodayHabits and AllHabits
  //that prop should contain the id and the title of the habit
  constructor(props) {
    super(props);
    this.state = {
      id: props.habitID,
      title: props.title,
      is_checked: false,
    };
  }

  toggleStatus() {
    this.setState({ is_checked: !this.state.is_checked });
  }

  //     async fetchHabits(id) {
  //     try {
  //       const resp = await fetch(`http://localhost:3000/habits/1`, {
  //         method: "GET",
  //         headers: { token: localStorage.token },
  //       });

  //       const data = await resp.json();
  //       if (data.status === 500) {
  //         throw Error("Habits not found");
  //       }
  //       this.setState({ dailyHabits: data });
  //       console.log(data);
  //     } catch (err) {
  //       throw new Error(err.message);
  //     }
  //   }

  render() {
    return (
      <div id="habit">
        <input
          type="checkbox"
          name="completed"
          checked={this.state.is_checked}
          onChange={this.toggleStatus}
        />
        <h2> {this.state.title} </h2>
        <button
          onClick={() => {
            this.props.history.push(`/editHabit/${this.state.id}`);
          }}
        >
          {" "}
          Edit{" "}
        </button>
      </div>
    );
  }
}

export default Habit;
