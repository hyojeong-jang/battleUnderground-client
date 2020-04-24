import axios from 'axios';
import { SEOUL_DATA_API } from 'react-native-dotenv';

export const receiveNearStation = async (x, y) => {
  const response = await axios.get(`SEOUL_DATA_API${x}/${y}`);
  const stationList = response.data.stationList.map(station => {
    return {label: `${station.statnNm} ${station.subwayNm}`, value: `${station.statnNm} ${station.subwayNm}`};
  });
  return stationList;
}
