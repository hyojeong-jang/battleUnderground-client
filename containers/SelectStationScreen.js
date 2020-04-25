import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

import { selectedStation } from '../actions/index';
import { receiveNearStation } from '../api/seoulAPI';
import { getAddress } from '../api/geocoding';

import SelectStation from '../components/SelectStationDetail';

export default function SelectStationScreen ({ navigation }) {
  const dispatch = useDispatch();
  const longitude = useSelector(state => state.location.longitude);
  const latitude = useSelector(state => state.location.latitude);

  const [ currentLocation, setCurrentLocation ] = useState('');
  const [ stationList, setStationList ] = useState(null);
  const [ userStation, setUserStation ] = useState(null);

  useEffect(() => {
    const nearStation = async () => {
      const stations = await receiveNearStation(longitude, latitude);
      const address = await getAddress(longitude, latitude);

      setCurrentLocation(address);
      setStationList(stations);
    }
    nearStation();
  }, [])

  const [ fontsLoaded ] = useFonts({
    'silkscreen': require('../assets/fonts/silkscreen.ttf')
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <SelectStation
          style={styles.mainSection}
          currentLocation={currentLocation}
          stationList={stationList}
          setUserStation={setUserStation}
        />
        <TouchableOpacity
          onPress={() => {
            dispatch(selectedStation(userStation))
            navigation.navigate('SelectTrain')
          }}
        >
          <Text style={styles.EnterButton}>Enter Station</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return <AppLoading />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'white'
  },
  mainSection: {
    height: '80%'
  },
  EnterButton: {
    height: '20%',
    color: '#23374d',
    fontSize: 20,
    fontFamily: 'silkscreen'
  }
});
