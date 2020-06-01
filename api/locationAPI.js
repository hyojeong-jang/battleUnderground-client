import * as Location from 'expo-location';

export default getLocation = async () => {
  let { status } = await Location.requestPermissionsAsync();
  if (status !== 'granted') {
    console.log('Permission to access location was denied');
  }
  let location = await Location.getCurrentPositionAsync({});
  return location.coords;
}
