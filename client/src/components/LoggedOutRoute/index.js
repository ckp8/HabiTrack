import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const LoggedOutRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route render={() => (
        !isLoggedIn
            ? <Component {...rest} />
            : <Redirect to='/all' />
    )} />
)


export default LoggedOutRoute;