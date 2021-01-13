import React from 'react';
import './habit.css';

class Habit extends React.Component {
    //this habit object requires a prop name habit from the components TodayHabits and AllHabits 
    //that prop should contain the id and the title of the habit
    state = {
        id: this.props.habit.id,
        title: this.props.habit.title,
        is_checked: false
    }

    toggleStatus () {
        if (this.state.is_checked === false) {
            this.setState.is_checked = true;
            //api call to server here to increase habit's streak
            // probably need a new UPDATE route
        } else {
            this.setState.is_checked = false;
            //api call to server here to decrease habit's streak
        }
    }

    render() {
        return (
            <div id='habit'>
                <input type='checkbox' name='completed' checked={ this.state.is_checked } onClick={ this.toggleStatus } />
                <h2> {this.state.title} </h2>
                <button onClick={() => { this.props.history.push(`/editHabit/${this.state.id}`) }}> Edit </button>
            </div>
        )
    }
}

export default Habit;