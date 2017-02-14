import React, { Component, PropTypes } from 'react'
import {Link} from '../../navigation'

class SubPage1 extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h4>Sub page 1</h4>
                <section>
                    <Link to="/sub2">
                        go to sub 2
                    </Link>
                </section>
                <section>
                    <Link to="/sub1/nested1">
                        go to nested
                    </Link>
                </section>
                {this.props.children}
            </div>
        )
    }
}

export default SubPage1