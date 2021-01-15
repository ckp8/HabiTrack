import React from "react";

class Achievements extends React.Component {
  // should return all habits with name and times_completed of a specfic user
  state = {
    user_id: this.props.user_id,
    habits: [],
  };

  componentDidMount() {
    this.fetchHabits(this.state.user_id);
  }


  //should fetch all habits of user
  async fetchHabits(id) {
    try {
      const resp = await fetch(`http://localhost:3000/users/${id}`);
      const data = await resp.json();
      if (data.status === 500) {
        throw Error("Habits not found");
      }
      this.setState({ habits: data });
    } catch (err) {
      throw new Error(err.message);

    }
  }

  render() {
    return (
      <div id="habits">
        <h1>Achievements page!</h1>
        {this.state.habits.map((habit) => {
          return (
            <div className="habit-container">
              <p>
                {habit.name}
                {habit.times_completed}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Achievements;
