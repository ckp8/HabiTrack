import React from "react";

class Achievements extends React.Component {
  // should return all habits with name and times_completed of a specfic user
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.userID,
      habits: [],
    };
  }

  componentDidMount() {
    this.fetchHabits(this.state.user_id);
  }

  //should fetch all habits of user
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
      console.log(data)
      this.setState({ habits: data });
    } catch (err) {
      throw new Error(err.message);

    }
  }

  render() {
    const renderhabits = this.state.habits.map((habit) => {
        console.log(habit);
        return (
          <div key={habit.habit_id}>
            <p> {habit.title, habit.times_completed}</p>
          </div>
        );
      });


    return (
      <div id="habits">
          <p> Achievements Page! </p>
          { renderhabits }
      </div>
    );
  }
}

export default Achievements;
