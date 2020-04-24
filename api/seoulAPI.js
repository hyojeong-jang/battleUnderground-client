import axios from 'axios';

export const receiveNearStation = async (x, y) => {
  const response = await axios.get(`http://swopenAPI.seoul.go.kr/api/subway/774b7a4e6f63687337396b684e6872/json/nearBy/0/5/${x}/${y}`);
  const stationList = response.data.stationList.map(station => {
    return {label: `${station.statnNm} ${station.subwayNm}`, value: `${station.statnNm} ${station.subwayNm}`};
  });
  return stationList;
}