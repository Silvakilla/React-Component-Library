import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Text extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }

    render() {
        return (
            <div {...this.props}>
                {this.state.data}
            </div>
        );
    }
}

Text.propTypes = {
    data: PropTypes.oneOf(PropTypes.string,PropTypes.array,PropTypes.element).isRequired,
};

export default Text;