import * as types from '../constants/index';

const initialState = {
  nickname: '',
  id: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_USER:
      return {
        ...state,
        nickname: action.nickname,
      };
    case types.DISPATCH_USER_DOCUMENT:
      return {
        ...state,
        id: action.document._id
      }
    case types.DISPATCH_EXIST_USER_DOCUMENT:
      return {
        ...state,
        id: action.document._id,
      }
    default:
      return state;
  }
}

export default user
