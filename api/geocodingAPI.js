import Geocoder from 'react-native-geocoding';
import getEnvVars from '../environment';

const { GEO_API_KEY } = getEnvVars();

Geocoder.init(GEO_API_KEY);

export const getAddress = async (x, y) => {
  const response = await Geocoder.from({
    longitude : x,
    latitude : y
  });
  return response.results[0].formatted_address
  // return 'vanilla coding'
}
