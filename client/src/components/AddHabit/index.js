import React from 'react';

class AddHabit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.userID,
            title: "",
            description: "",
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    // state = {
    //     user_id : this.props.user_id,
    //     title: "",
    //     description: "",
    //     monday: false,
    //     tuesday: false,
    //     wednesday: false,
    //     thursday: false,
    //     friday: false,
    //     saturday: false,
    //     sunday: false,
    // }

    handleCheck = e => {
        switch ( e.target.name) {
            case "monday" :
                this.setState({monday: !this.state.monday});
                break;
            case "tuesday" :
                this.setState({tuesday: !this.state.tuesday});
                break;
            case "wednesday" :
                this.setState({wednesday: !this.state.wednesday});
                break;
            case "thursday" :
                this.setState({thursday: !this.state.thursday});
                break;
            case "friday" :
                this.setState({friday: !this.state.friday});
                break;
            case "saturday" :
                this.setState({saturday: !this.state.saturday});
                break;
            case "sunday" :
                this.setState({sunday: !this.state.sunday});
                break;
            default :
                console.log("this should never appear");
        }
    }

    handleTitle = e => {
        const inputTitle = e.target.value
        this.setState({ title: inputTitle })
    }

    handleDescription = e => {
        const inputDescription = e.target.value
        this.setState({ description: inputDescription })
    }

    handleSubmit (e) {
        e.preventDefault();
        console.log(this.state)
        const options = {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json",
                token: localStorage.token
            },
            body: JSON.stringify(this.state)  // does this need to be an object?
        }

        fetch('http://localhost:3000/habits', options)    //route might be wrong
            .then(r => r.json())
            .then(resp => {
                console.log('resp is', resp)
                const {id, err} = resp;
                if(err) { throw Error(err) }
                // else {history.push("/dashboard")}   //how to change history
            })
            // .catch(err => console.log('oops', err.message))
            // .catch(err => setAlert(err.message))
    }

    render() {
        return (
            <div id='add-habit-form'>
                <h1> Add Habit! </h1>
                <form>
                    <input type='text' placeholder='Habit Name' value={this.state.title} onChange={this.handleTitle} /><br/>
                    <textarea name='description' rows='4' cols='50' placeholder='Description' value={this.state.description} onChange={this.handleDescription} /><br/>
                    <input type="checkbox" id="monday" name="monday" value="monday" checked={this.state.monday} onChange={this.handleCheck} />
                    <label htmlFor="monday"> Monday </label><br/>
                    <input type="checkbox" id="tuesday" name="tuesday" value="tuesday" checked={this.state.tuesday} onChange={this.handleCheck} />
                    <label htmlFor="tuesday"> Tuesday </label><br/>
                    <input type="checkbox" id="wednesday" name="wednesday" value="wednesday" checked={this.state.wednesday} onChange={this.handleCheck} />
                    <label htmlFor="wednesday"> Wednesday</label><br/>
                    <input type="checkbox" id="thursday" name="thursday" value="thursday" checked={this.state.thursday} onChange={this.handleCheck} />
                    <label htmlFor="thursday"> Thursday </label><br/>
                    <input type="checkbox" id="friday" name="friday" value="friday" checked={this.state.friday} onChange={this.handleCheck} />
                    <label htmlFor="friday"> Friday </label><br/>
                    <input type="checkbox" id="saturday" name="saturday" value="saturday" checked={this.state.saturday} onChange={this.handleCheck} />
                    <label htmlFor="saturday"> Saturday </label><br/>
                    <input type="checkbox" id="sunday" name="sunday" value="sunday" checked={this.state.sunday} onChange={this.handleCheck} />
                    <label htmlFor="sunday"> Sunday </label><br/>
                    <input type='submit' onClick={this.handleSubmit} />
                </form>
            </div>
        )
    }
}

export default AddHabit;