import axios from 'axios';
import getEnvVars from '../environment';

const { SEOUL_DATA_API } = getEnvVars();

export const receiveNearStation = async (x, y) => {
  const response = await axios.get(`${SEOUL_DATA_API}${x}/${y}`);
  const stationList = response.data.stationList.map(station => {
    const stationInfo = `${station.statnNm} ${station.subwayNm}`;
    return {label: stationInfo, value: stationInfo};
  });
  return stationList;
}
