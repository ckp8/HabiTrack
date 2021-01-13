import React from 'react';
import './todayhabits.css';

class TodayHabits extends React.Component {
    // This component will show the habits that the user has to complete this specific day
    // To do this we need to make a api call to get all habits where they have the respective day as true in the sql
    state = {
        dailyHabits: []
    }

    displayHabits () {
        const todayHabits ="";


    }


    render() {
        return (
            //for each habit, it will display a new habit component
            //we need to pass a prop to each habit component containing that habit's id and title
            <div id='dailyHabits'>
                <h1></h1>
                {this.displayHabits()}
                <button onClick={() => { history.push(`/newHabit`) }}>Add a habit!</button>
            </div>
        )
    }
}

export default TodayHabits;