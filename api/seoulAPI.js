import axios from 'axios';
import getEnvVars from '../environment';

const { SEOUL_DATA_API, SEOUL_DATA_REAL_TIME_API } = getEnvVars();

export const receiveNearStation = async (x, y) => {
  const response = await axios.get(`${SEOUL_DATA_API}${x}/${y}`);
  const stationList = response.data.stationList.map(station => {
    const stationInfo = `${station.statnNm} ${station.subwayNm}`;
    return {label: stationInfo, value: stationInfo};
  });
  return stationList;
}

export const receiveRealTimeArrivalList = async (station) => {
  const response = await axios.get(`${SEOUL_DATA_REAL_TIME_API}${station}`);
  const arriveCode = {0: '진입', 1: '도착', 2: '출발', 3: '전역출발', 4: '전역진입', 5: '전역도착', 99: '운행중'};

  const data = response.data.realtimeArrivalList.map((data) => {
    return {
      label: `${data.arvlMsg2} ${data.trainLineNm} ${arriveCode[data.arvlCd]}`,
      value: `${data.btrainNo} ${data.trainLineNm}`
    };
  })
  return data;
}

// arrivedMessage: data.arvlMsg2,
// status: arriveCode[data.arvlCd],
// direction: data.trainLineNm,
// number: data.btrainNo