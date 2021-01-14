import React, { Fragment, useState, useEffect, Component } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { Header, Footer } from "./layout";
import { TodayHabits } from "./components";

// toast.configure();

function App() {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:3000/auth/verified-user", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parsedResponse = await res.json();
      parsedResponse === true
        ? setIsAuthenticated(true)
        : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route
            exact
            path="/login"
            render={(props) =>
              !isAuthenticated ? (
                <Login {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/dashboard" />
              )
            }
          />
          <Route
            exact
            path="/register"
            render={(props) =>
              !isAuthenticated ? (
                <Register {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/dashboard"
            render={(props) =>
              isAuthenticated ? (
                <Dashboard {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          {/* <Route path="/habit" render={() => <TodayHabits />} /> */}
        </Switch>
      </div>
      <Footer />
    </>
  );

  // import { Switch, Route, Redirect} from 'react-router-dom';
  // import React, { Component } from 'react';
  // import { Landing, newHabit, Registration, TodayHabits, AllHabits, Achievements, NotFound, Login, LoggedOutRoute, PrivateRoute} from './components';
  // import { Header, Footer } from './layout';

  // class App extends React.Component {
  //     state = {
  //         isLoggedIn : false,
  //         currentUser : {}
  //     }

  //     logout = () =>{
  //         this.setState({ isLoggedIn: false })
  //         this.props.history.push('./')
  //     }

  //     render() {
  //         return (
  //             <div id="App">
  //                 <Header user={this.state.currentUser} isLoggedIn={this.state.isLoggedIn} logout={this.logout}/>
  //                 <main>
  //                 <Switch>
  //                     <Route exact path="/" component={Landing} />
  //                     <LoggedOutRoute path="/login" isLoggedIn={this.state.isLoggedIn} login={this.login} component={Login} />
  //                     <LoggedOutRoute path="/register" isLoggedIn={this.state.isLoggedIn} login={this.login} component={Registration} />
  //                     <PrivateRoute path="/habit" isLoggedIn={this.state.isLoggedIn} component={TodayHabits} />
  //                     <PrivateRoute path="/all-habits" isLoggedIn={this.state.isLoggedIn} component={AllHabits} />
  //                     <PrivateRoute path="/achievements" isLoggedIn={this.state.isLoggedIn} component={Achievements} />
  //                     <PrivateRoute path ="/create" isLoggedIn={this.state.isLoggedIn} component={newHabit}/>
  //                     <Route path="/*" component={NotFound} />
  //                 </Switch>
  //                 </main>
  //                 <Footer />
  //             </div>
  //         );
  //     }
}

export default App;
