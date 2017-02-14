import React, { Component, PropTypes } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export { Link }

export default function (config) {
    const routes = getRoutes(config)

    class Navigation extends Component {
        static propTypes = {
            baseUrl: PropTypes.string
        };

        static contextTypes = {
            router: PropTypes.object
        }

        render() {
            const basename = this.props.baseUrl ||
                (this.context.router && window.location.pathname.replace(this.context.router.params.splat, ''))

            return (
                <div>
                    <h3>Breadcrumbs</h3>
                    <Router basename={basename}>
                        <div>
                            {routes}
                        </div>
                    </Router>
                </div>
            )
        }
    }

    return Navigation
}

function getRoutes(config) {
    return Object.keys(config).map((key) => {
        const desc = config[key]
//        const subRoutes = desc.nested && getRoutes(config.nested)
        return <Route path={key} key={key} component={desc.component} />
    })
}