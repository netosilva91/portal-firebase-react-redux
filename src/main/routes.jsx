import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Home from '../pages/home/home'
import AboutEvent from '../pages/aboutEvent/aboutEvent'

export default (props) => (
    <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='aboutEvent' component={AboutEvent} />
        <Redirect from='*' to='/' />
    </Router>
)
