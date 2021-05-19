import initialState from './initialState'

const reducer = (state = initialState, action) => {
    switch (action.payload) {
        default:
            return state;
    }
}

export default reducer