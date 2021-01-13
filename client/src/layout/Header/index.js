import React from 'react';
import './header.css';

// class Header extends React.Component {
//     state = {
//         username: this.props.user.username
//     }

//     // fetchUsers = () => {
//     //     fetch('localhost:3000/users')
//     //         .then(r=>r.json())
//     //         .then(r => this.setState({username: r.name[0]}))
//     // }

//     render() {
//         return (
//             <header>
//                 <h1>HabiTrack</h1>
//                 {this.state.username !== '' ?
//                  <p>Hi {this.state.username}! <button id="logout"> Log out </button></p> : 
//                  <p>Hi User! Have an account? Log in <a href="localhost:8000/login">here!</a> New to HabiTrack? Make an account <a href="localhost:8000/register">here!</a> </p>}
//             </header>
//         )
//     }
// }

// export default Header;

const Header = ({ user, isLoggedIn, logout}) => {
    return (
        <header>
            <h1>HabiTrack</h1>
            { !isLoggedIn ? 
            <p> Hi User! Have an account? Log in <a href="localhost:8000/login">here!</a> New to HabiTrack? Make an account <a href="localhost:8000/register">here!</a> </p> 
            : 
            <p> Hi {user.name}! <button id="logout" onClick={logout}> Log out </button> </p>
            }
        </header>
    )
}


export default Header;