import React, { Component, PropTypes } from 'react'
import {Link} from '../../navigation'

class SubPage2 extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h4>Sub Page 2</h4>
                <section>
                    <Link to="/sub1">
                        go to sub 1
                    </Link>
                </section>
            </div>
        )
    }
}

export default SubPage2