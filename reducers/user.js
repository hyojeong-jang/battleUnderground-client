import * as types from '../constants/index';

const initialState = {
  nickname: ''
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_USER:
      return {
        ...state,
        nickname: action.nickname,
      };
    default:
      return state;
  }
}

export default user