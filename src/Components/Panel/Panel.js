import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Panel extends Component {

    static propTypes = {
        style: PropTypes.object,
        children: PropTypes.node
    };

    render() {
        const {style,children,...other} = this.props;

        return (
            <div style={style} {...other}>
                {children}
            </div>
        );
    }
}

export class DefaultPanel extends Component {

    static propTypes = {

    };

    render() {
        return (
            <div>

            </div>
        );
    }
}