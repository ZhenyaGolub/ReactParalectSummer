import { CHANGE_EMPTY, FETCH_USER } from './types';

export const getUser = (user) => ({
    type: FETCH_USER,
    payload: user
})

export const changeEmptyContent = () => ({
    type: CHANGE_EMPTY
})