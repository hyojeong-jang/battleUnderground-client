import * as types from '../constants/index'

export const receiveLocation = (latitude, longitude) => ({
  type: types.RECEIVE_LOCATION,
  latitude,
  longitude
});

export const selectedStation = (station) => ({
  type: types.SELECTED_STATION,
  station
})

export const selectedTrain = (train) => ({
  type: types.SELECTED_TRAIN,
  train
})

export const saveUser = (nickname) => ({
  type: types.SAVE_USER,
  nickname
});

export const dispatchUserDocument = (document) => ({
  type: types.DISPATCH_USER_DOCUMENT,
  document
});

export const dispatchExistUserDocument = (document) => ({
  type: types.DISPATCH_EXIST_USER_DOCUMENT,
  document
});

export const clearGameStatus = () => ({
  type: types.CLEAR_GAME_STATUS
});
