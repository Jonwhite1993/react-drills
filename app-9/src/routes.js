import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Details from './components/Details';
import Home from './components/Home';

export default(
    <Switch>
        <Route exact path='/' component={Home}  />
        <Route path='/signup' component={Signup} />
        <Route path='/details/:id' component={Details} />
    </Switch>
)