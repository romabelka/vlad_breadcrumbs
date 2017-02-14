import React, { Component, PropTypes } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import SubPage1 from '../app/nav/SubPage1'

class Navigation extends Component {
    static propTypes = {
        baseUrl: PropTypes.string

    };

    static contextTypes = {
        router: PropTypes.object
    }

    render() {
        const baseName = this.props.baseUrl ||
            (this.context.router && window.location.pathname.replace(this.context.router.params.splat, ''))
        return (
            <div>
                <h3>Breadcrumbs</h3>
                <Router basename={baseName}>
                    <Route path="/sub1" component={SubPage1}/>
                </Router>
            </div>
        )
    }
}



export default Navigation