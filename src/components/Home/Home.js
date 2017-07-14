import './Home.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {switchFoo} from '../../stores';

class Home extends Component {

    render() {
        return (
            <div>
                <p onClick={this.props.switchFoo}>click me NAOW! AOUWL!</p>
                <p>{this.props.foo}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        foo: state.defaultReducer.foo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        switchFoo: () => {
            dispatch(switchFoo());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
