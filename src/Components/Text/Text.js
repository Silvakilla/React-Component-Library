import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Text extends Component {

    static propTypes = {
        data: PropTypes.any.isRequired
    };

    render() {
        const {data,...other} = this.props;

        return (
            <div {...other}>
                {data}
            </div>
        );
    }
}
