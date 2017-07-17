import '../index.css';
import React from 'react';
import {storiesOf} from '@storybook/react';

import Text from '../Components/Text/Text';
import CustomInput from '../Components/CustomInput/CustomInput';

const documentation = storiesOf('Documentation', module);

documentation.add('PropTypes - Types',() => {
    return (
        <Text data={
            <div>
                <h3>All Types which can be used with PropTypes</h3>
                <p>
                    PropTypes.array
                </p>
                <p>
                    PropTypes.bool
                </p>
                <p>
                    PropTypes.func
                </p>
                <p>
                    PropTypes.number
                </p>
                <p>
                    PropTypes.object
                </p>
                <p>
                    PropTypes.string
                </p>
                <p>
                    PropTypes.symbol
                </p>
                <p>
                    PropTypes.node
                </p>
                <p>
                    PropTypes.element
                </p>
                <p>
                    PropTypes.instanceOf(Message)
                </p>
                <p>
                    PropTypes.oneOf(PropTypes.string,...)
                </p>
                <p>
                    PropTypes.oneOfType([PropTypes.string,PropTypes.number])
                </p>
                <p>
                    PropTypes.arrayOf(PropTypes.number)
                </p>
                <p>
                    PropTypes.PropTypes.shape([curly brackets]color: PropTypes.string, fontSize: PropTypes.number[curly brackets])
                </p>
                <p>
                    PropTypes.func.isRequired
                </p>
            </div>
        }/>
    );
});

const componentStories = storiesOf('React Component Library', module);

componentStories.add('Output',() =>{
    return (
        <div>
            <Text data='Test'/>
            <Text data={['Array-Test']}/>
            <Text data={<p>P-Element-Test</p>}/>
        </div>
    );
});

componentStories.add('Custom Input',() => {
    return (
        <div>
            <CustomInput type="text"/>
        </div>
    )
});