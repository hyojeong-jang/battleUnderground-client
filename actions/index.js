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
