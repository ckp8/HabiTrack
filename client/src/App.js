import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';

import { Landing, newHabit, Registration, TodayHabits, AllHabits, Achievements, NotFound, Login} from './components';
import { Header, Footer } from './layout';

// import './styles/app.css';

class App extends React.Component {
    render() {
        return (
            <div id="App">
                <Header />
                <main>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Registration} />
                    <Route path="/today" component={TodayHabits} />
                    <Route path="/all" component={AllHabits} />
                    <Route path="/achievements" component={Achievements} />
                    <Route path ="/create" component={newHabit}/>
                    <Route path="/*" component={NotFound} />
                    
                </Switch>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;