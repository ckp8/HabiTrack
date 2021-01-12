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

    render() {
        return (
            <div id="App">
                <Header user={this.state.currentUser}/>
                <main>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <LoggedOutRoute path="/login" isLoggedIn={this.state.isLoggedIn} login={this.login} component={Login} />
                    <LoggedOutRoute path="/register" isLoggedIn={this.state.isLoggedIn} login={this.login} component={Registration} />
                    <PrivateRoute path="/today" isLoggedIn={this.state.isLoggedIn} component={TodayHabits} />
                    <PrivateRoute path="/all" isLoggedIn={this.state.isLoggedIn} component={AllHabits} />
                    <PrivateRoute path="/achievements" isLoggedIn={this.state.isLoggedIn} component={Achievements} />
                    <PrivateRoute path ="/create" isLoggedIn={this.state.isLoggedIn} component={newHabit}/>
                    <Route path="/*" component={NotFound} />
                </Switch>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;