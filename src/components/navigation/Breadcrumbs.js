import React, { Component, PropTypes } from 'react'
import {matchPath, Link} from 'react-router-dom'


class Breadcrumbs extends Component {
    static propTypes = {
        routeConfig: PropTypes.object.isRequired,
        router: PropTypes.object.isRequired
    };

    render() {
        const {routeConfig, router} = this.props
        const links = getLinks(routeConfig, router.match.url)
            .map((desc, i, arr) => {
                const item = i < arr.length - 1
                    ? <Link to={desc.url}>{desc.name}</Link>
                    : <span>{desc.name}</span>

                return <li key={desc.url}>{item}</li>
            })
        return (
            <ul>
                {links}
            </ul>
        )
    }
}

function getLinks(config, location, acc = [], base = '') {
    const matchedRoute = Object.keys(config).find(url => matchPath(location, base + url))
    if (!matchedRoute) {
        return acc
    }
    const res = acc.concat({
        url: base + matchedRoute,
        name: matchedRoute
    })
    return config[matchedRoute].nested
        ? getLinks(config[matchedRoute].nested, location, res, base + matchedRoute + '/')
        : res
}

export default Breadcrumbs