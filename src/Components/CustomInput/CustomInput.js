import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CustomInput extends Component {

    constructor(props){
        super(props);
        this.state = {
            type: this.props.type
        };
    }

    render(){
        return (
            <div>
                <input type={this.state.type} {...this.props}/>
            </div>
        )
    }
}

CustomInput.propTypes = {
    type: PropTypes.string.isRequired
};

export default CustomInput;