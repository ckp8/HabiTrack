import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import { Landing, Authors, Books, NotFound404 } from './pages';
// import { NavBar, Footer } from './layout';

import './styles/app.css';

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
            </Switch>
            </main>

            {/* <Footer /> */}
        </div>
    );
}

export default App;
