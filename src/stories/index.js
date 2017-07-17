import '../index.css';
import React from 'react';
import {storiesOf} from '@storybook/react';

import Text from '../Components/Text/Text';
import Input from '../Components/Input/Input';
import { Panel } from '../Components/Panel/Panel';

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
            <Text data={['Array-Test','Array-Test 2']}/>
            <Text data={<p>P-Element-Test</p>}/>
        </div>
    );
});

componentStories.add('Input',() => {
    return (
        <div>
            <h2>Text-Input with RegEx</h2>
            <Input type="text" placeholder="text" pattern="[A-Za-z0-9]{5}" />

            <h2>Other Inputs</h2>
            <Input type="email" placeholder="email" />
            <Input type="password" placeholder="password" />
        </div>
    )
});

componentStories.add('Panel',() => {
    return(
        <div>
            <Panel style={{border:'1px solid black',width:'380px',height:'120px'}}>
                <p>Text</p>
            </Panel>
        </div>
    )
});