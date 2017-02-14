import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import Root from './components/app/Root'
import Page1 from './components/app/Page1'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Root}>
            <Route path="page1" component={Page1}>

            </Route>
        </Route>
    </Router>
)