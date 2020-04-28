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
  // [
  //   {
  //     "label": "신창 1호선",
  //     "value": "신창 1호선",
  //   },
  //   {
  //     "label": "온양온천 1호선",
  //     "value": "온양온천 1호선",
  //   },
  //   {
  //     "label": "배방 1호선",
  //     "value": "배방 1호선",
  //   },
  //   {
  //     "label": "아산 1호선",
  //     "value": "아산 1호선",
  //   },
  //   {
  //     "label": "쌍용(나사렛대) 1호선",
  //     "value": "쌍용(나사렛대) 1호선",
  //   },
  // ];
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
  // [
  //   {
  //     "label": "배방 도착 천안행 - 아산방면 (막차) 도착",
  //     "value": "0722 천안행 - 아산방면 (막차)",
  //   },
  //   {
  //     "label": "[5]번째 전역 (두정) 천안행 - 온양온천방면 운행중",
  //     "value": "0717 천안행 - 온양온천방면",
  //   },
  //   {
  //     "label": "[9]번째 전역 (지제) 천안행 - 온양온천방면 (막차) 운행중",
  //     "value": "0719 천안행 - 온양온천방면 (막차)",
  //   },
  // ]
}

// arrivedMessage: data.arvlMsg2,
// status: arriveCode[data.arvlCd],
// direction: data.trainLineNm,
// number: data.btrainNo