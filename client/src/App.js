import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Landing, Registration, AddHabit, TodayHabits, AllHabits, Achievements, NotFound, Login} from './pages';
import { Header, Footer } from './layout';

// import './styles/app.css';

class App extends React.Component {
    render() {
        return (
            <div id="App">
                <Header />
                {/* <NavBar /> */}
    
                <main>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Registration} />
                    <Route path="/add" component={AddHabit} />
                    <Route path="/today" component={TodayHabits} />
                    <Route path="/all" component={AllHabits} />
                    <Route path="/achievements" component={Achievements} />
                    <Route path="/*" component={NotFound} />
                </Switch>
                </main>
    
                <Footer />
            </div>
        );
    }
}

export default App;
