import initialState from './initialState'
import { CHANGE_EMPTY, FETCH_USER, TOGGLE_LOADER } from './types';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER:
            return {...state, user: action.payload}
        case CHANGE_EMPTY:
            return {...state, emptyContent: 'USER NOT FOUND'}
        case TOGGLE_LOADER:
            return {...state, isLoader: !state.isLoader}
        default:
            return state;
    }
}

export default reducer