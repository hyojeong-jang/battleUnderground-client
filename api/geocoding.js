import Geocoder from 'react-native-geocoding';
import { GEO_API_KEY } from 'react-native-dotenv';

Geocoder.init(GEO_API_KEY);

export const getAddress = async (x, y) => {
  const response = await Geocoder.from({
    longitude : x,
    latitude : y
  });
  return response.results[0].formatted_address
}
