import React, { Component, PropTypes } from 'react'

class Root extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>Root</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Root