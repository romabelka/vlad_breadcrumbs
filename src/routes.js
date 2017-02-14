import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import Root from './components/userApp/Root'
import Page1 from './components/userApp/Page1'
import SubPage1 from './components/userApp/nav/SubPage1'
import SubPage2 from './components/userApp/nav/SubPage2'

import createNavigator from './components/navigation'

const Navigator = createNavigator({
    '/sub1': {
        component: SubPage1
    },
    '/sub2': {
        component: SubPage2
    }
})

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Root}>
            <Route path="page1" component={Page1}>
                <Route path="nav**" component={Navigator} />
            </Route>
        </Route>
    </Router>
)