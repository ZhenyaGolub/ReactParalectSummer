import { CHANGE_EMPTY, FETCH_USER, TOGGLE_LOADER } from './types';

export const getUser = (user) => ({
    type: FETCH_USER,
    payload: user
})

export const changeEmptyContent = () => ({
    type: CHANGE_EMPTY
})

export const toggleLoader = () => ({
    type: TOGGLE_LOADER
})