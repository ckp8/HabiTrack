import React, { Component } from 'react';
import './header.css';

class Header extends React.Component {
    state = {
        username: ''
    }

    // fetchUsers = () => {
    //     fetch('localhost:3000/users')
    //         .then(r=>r.json())
    //         .then(r => this.setState({username: r.name[0]}))
    // }

    render() {
        return (
            <header>
                <h1>HabiTrack</h1>
                {this.state.username !== '' ?
                // <p>Hi User!</p> :
                 <p>Hi {this.state.username}!</p> : 
                 <p>Hi User! Have an account? Log in <a href="localhost:8000/login">here!</a> New to HabiTrack? Make an account <a href="localhost:8000/register">here!</a> </p>
                }
            </header>
        )
    }
}

export default Header;