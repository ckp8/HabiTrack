import { Switch, Route, Redirect} from 'react-router-dom';
import React, { Component } from 'react';

import { Landing, newHabit, Registration, TodayHabits, AllHabits, Achievements, NotFound, Login, LoggedOutRoute, PrivateRoute} from './components';
import { Header, Footer } from './layout';

// import './styles/app.css';

class App extends React.Component {
    state = {
        isLoggedIn : false,
        currentUser : {}
    }

    // login = async (userData) => {
    //     try {
    //         const options = {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(userData)
    //         }
    //         const r = await fetch(`http://localhost:3000/auth/login`, options)
    //         const data = await r.json()
    //         if (data.err){ throw Error(data.err) }
    //         this.setState({ isLoggedIn: true, currentUser: data.user })
    //         this.props.history.push('./habit')
    //     } catch (err) {
    //         console.warn(`Error: ${err}`);
    //     }
    // }

    logout = () =>{
        this.setState({ isLoggedIn: false })
        this.props.history.push('./')
    }

    render() {
        return (
            <div id="App">
                <Header user={this.state.currentUser} isLoggedIn={this.state.isLoggedIn} logout={this.logout}/>
                <main>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <LoggedOutRoute path="/login" isLoggedIn={this.state.isLoggedIn} login={this.login} component={Login} />
                    <LoggedOutRoute path="/register" isLoggedIn={this.state.isLoggedIn} login={this.login} component={Registration} />
                    <PrivateRoute path="/habit" isLoggedIn={this.state.isLoggedIn} component={TodayHabits} />
                    <PrivateRoute path="/all-habits" isLoggedIn={this.state.isLoggedIn} component={AllHabits} />
                    <PrivateRoute path ="/create" isLoggedIn={this.state.isLoggedIn} component={newHabit}/>
                    <PrivateRoute path="/achievements" isLoggedIn={this.state.isLoggedIn} component={Achievements} />
                    
                    <Route path="/*" component={NotFound} />
                </Switch>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;