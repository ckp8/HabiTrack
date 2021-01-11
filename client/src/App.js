import {render} from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import {newHabit} from "./components";

// import { Landing, Authors, Books, NotFound404 } from './pages';
// import { NavBar, Footer } from './layout';

// import './styles/app.css';

const App = () => {
    return (
        <div id="App">
            {/* <NavBar /> */}

            <main>
            <Switch>
                {/* <Route exact path="/" component={Landing} />
                <Route path="/authors" component={Authors} />
                <Route path="/books" component={Books} />
                <Route path="/*" component={NotFound404} /> */}
                <Route path ="/create" component={newHabit}/>
            </Switch>
            </main>

            {/* <Footer /> */}
        </div>
    );
    
}


export default App;
