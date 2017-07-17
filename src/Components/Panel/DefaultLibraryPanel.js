import React, {Component} from 'react';
import PropTypes from 'prop-types';

// funktioniert mit components von dieser library
export default class Panel extends Component {

    render() {
        return (
            <div className="Panel" style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

Panel.propTypes = {
    style: PropTypes.any
};