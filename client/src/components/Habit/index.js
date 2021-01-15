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
        this.setState({ is_checked: !this.state.is_checked });
    }

    render() {
        return (
            <div id='habit'>
                <input type='checkbox' name='completed' checked={ this.state.is_checked } onChange={ this.toggleStatus } />
                <h2> {this.state.title} </h2>
                <button onClick={() => { this.props.history.push(`/editHabit/${this.state.id}`) }}> Edit </button>
            </div>
        )
    }
}

export default Habit;