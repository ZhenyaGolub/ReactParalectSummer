import initialState from './initialState'
import { CHANGE_EMPTY, FETCH_USER } from './types';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER:
            return {...state, user: action.payload}
        case CHANGE_EMPTY:
            return {...state, emptyContent: 'USER NOT FOUND'}
        default:
            return state;
    }
}

export default reducer