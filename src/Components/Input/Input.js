import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {

    static propTypes = {
        type: PropTypes.string.isRequired,
        pattern: PropTypes.string,
        showPattern: PropTypes.bool,
        onChange: PropTypes.func
    };

    render(){
        let {pattern,type,showPattern,onChange,...other} = this.props;

        return (
            <div>
                <input type={type} pattern={pattern} onChange={onChange} {...other}/>
                {showPattern ? <p>{pattern}</p> : ''}
            </div>
        )
    }
}
