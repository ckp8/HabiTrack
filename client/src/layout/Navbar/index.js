import React from 'react';
import './navbar.css';

class Navbar extends React.Component {

    render() {
        return (
            <div id="buttonContainer">
                <button onClick={() => { history.push('/today') }}> Today's Habits </button>
                <button onClick={() => { history.push('/all') }}> All Habits </button>
                <button onClick={() => { history.push('/achievements') }}> Achievements </button>
            </div>
        )
    }
}

export default Navbar;