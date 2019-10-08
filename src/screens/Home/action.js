import {ADD_USER,SET_REPOS} from './constant';
import api from '../../utils/api';

export function addUser(data) {
    return {
        type: ADD_USER,
        value: data,
    };
}

export function setRepos(data) {
    return {
        type: SET_REPOS,
        value: data,
    };
}

export const getRepos = (request) => async (dispatch, getState) => {
    const data=await api.get(`users/reactjs/repos?page=${request.page}&per_page=${request.perPage}`)
    debugger;
}
