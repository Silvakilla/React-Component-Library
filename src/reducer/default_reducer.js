import allActions from '../actions';
import { initState } from '../stores';

export const defaultReducer = (state = {...initState}, action) => {
    switch (action.type) {
        case allActions.SWITCH_FOO:
            return {...state, foo: 'EGGZ'};
        default:
            return state
    }
};
