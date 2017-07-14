import {createStore} from 'redux';
import allActions from '../actions';
import reducersCombined from '../reducer';

export const switchFoo = () => {
    return {
        type: allActions.SWITCH_FOO
    }
};

export const initState = {
    foo: 'bar'
};

export default createStore(
    reducersCombined,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
