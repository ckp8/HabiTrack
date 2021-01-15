import React from "react";
import moment from "moment";
import "./todayhabits.css";
import Habit from "../Habit";

class TodayHabits extends React.Component {
    // This component will show the habits that the user has to complete this specific day
    // To do this we need to make a api call to get all habits where they have the respective day as true in the sql
    state = {
        user_id : this.props.user_id,
        dailyHabits: [],
    };

    componentDidMount() {
        this.fetchHabits(this.state.user_id)
    }

    async fetchHabits(id) {
        try {
            const resp = await fetch('localhost:3000/habits')
            const data = await resp.json()
            if (data.status === 500){ throw Error('Habits not found') }
            this.setState({ dailyHabits: data })
        } catch(err) {
            throw new Error(err.message)
        }
    }

    //for each habit, it will display a new habit component
    //we need to pass a prop to each habit component containing that habit's id and title

    render() {
        const renderhabits = this.state.dailyHabits.map( habit => {
            return (
                <div key={habit.id}>
                    <Habit habit={habit.id, habit.title} />
                </div>
            )
        })

        return (
            <div id="dailyHabits">
                {moment().format("dddd")}, <br />
                {moment().format("Do MMMM YYYY")} <br />
                {moment().format("MMMM Do YYYY, h:mm:ss a")} <br />
                { renderhabits }
                {/* <button onClick={() => { history.push(`/newHabit`); }} > Add a habit! </button> */}
            </div>
        );
    }
}

export default TodayHabits;
