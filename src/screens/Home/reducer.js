import { ADD_USER } from './constant';

const initialState = {
  users: []
};
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      const [...users] = state.users;
      users.push(action.value);
      return { ...state, users: users }
    default:
      return state;
  }
};

export default homeReducer;