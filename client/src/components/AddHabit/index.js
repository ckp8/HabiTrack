import React from 'react';

class AddHabit extends React.Component {
    state = {
        user_id : this.props.user_id,
        habitData: {
            title: null,
            description: null,
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false,
        }
    }

    handleCheck = e => {
        let day = e.target.name
        this.state.habitData.day === false ?
        this.setState({ day: true }) :
        this.setState({ day: false })
    }

    handleDescription = e => {
        const inputDescription = e.target.value
        this.setState({ title: inputDescription })
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    render() {
        return (
            <div id='add-habit-form'>
                <h1> Add Habit! </h1>
                <form>
                    <input type='text' placeholder='Habit Name' onChange={this.handleTitle}></input><br></br>
                    <textarea name='description' rows='4' cols='50' placeholder='Description' onClick={this.handleDescription}></textarea><br></br>
                    <input type="checkbox" id="monday" name="monday" value="monday" onClick={this.handleCheck}></input>
                    <label for="monday">    Monday </label><br></br>
                    <input type="checkbox" id="tuesday" name="tuesday" value="tueday" onClick={this.handleCheck}></input>
                    <label for="tuesday">   Tuesday </label><br></br>
                    <input type="checkbox" id="wednesday" name="wednesday" value="wednesday" onClick={this.handleCheck}></input>
                    <label for="wednesday">     Wednesday</label><br></br>
                    <input type="checkbox" id="thursday" name="thursday" value="thursday" onClick={this.handleCheck}></input>
                    <label for="thursday">  Thursday </label><br></br>
                    <input type="checkbox" id="friday" name="friday" value="friday" onClick={this.handleCheck}></input>
                    <label for="friday">    Friday </label><br></br>
                    <input type="checkbox" id="saturday" name="saturday" value="saturday" onClick={this.handleCheck}></input>
                    <label for="saturday">  Saturday </label><br></br>
                    <input type="checkbox" id="sunday" name="sunday" value="sunday" onClick={this.handleCheck}></input>
                    <label for="sunday">    Sunday </label><br></br>
                    <input type='submit' onSubmit={this.handleSubmit}></input>
                </form>
            </div>
        )
    }

}

export default AddHabit;