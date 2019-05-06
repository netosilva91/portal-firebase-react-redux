import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../pages/home/home'
import AboutEvent from '../pages/aboutEvent/aboutEvent'

export default props => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/aboutEvent' component={AboutEvent} />
        <Redirect from='*' to='/' />
    </Switch>
)