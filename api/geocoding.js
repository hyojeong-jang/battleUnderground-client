import Geocoder from 'react-native-geocoding';

Geocoder.init('AIzaSyDV6n8-MnfuU_hBCcUvGOZRjU1SKDDI7qk');

export const getAddress = async (x, y) => {
  const response = await Geocoder.from({
    longitude : x,
    latitude : y
  });
  return response.results[0].formatted_address
}
