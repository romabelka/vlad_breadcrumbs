import React, { Component, PropTypes } from 'react'

class Page1 extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h2>Page 1</h2>
                {this.props.children}
            </div>
        )
    }
}

export default Page1