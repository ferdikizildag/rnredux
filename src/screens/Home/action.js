import {ADD_USER} from './constant';

export function addUser(data) {
    return {
        type: ADD_USER,
        value: data,
    };
}