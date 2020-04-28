import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

import { selectedStation } from '../actions/index';
import { receiveNearStation } from '../api/seoulAPI';
import { getAddress } from '../api/geocodingAPI';

import SelectStation from '../components/SelectStationDetail';

export default function SelectStationScreen ({ navigation }) {
  const dispatch = useDispatch();
  const longitude = useSelector(state => state.location.longitude);
  const latitude = useSelector(state => state.location.latitude);

  const [ currentLocation, setCurrentLocation ] = useState('');
  const [ stationList, setStationList ] = useState(null);
  const [ station, setStation ] = useState(null);

  useEffect(() => {
    const getNearStation = async () => {
      const stations = await receiveNearStation(longitude, latitude);
      const address = await getAddress(longitude, latitude);

      setCurrentLocation(address);
      setStationList(stations);
    }
    getNearStation();
  }, [])

  const [ fontsLoaded ] = useFonts({
    'silkscreen': require('../assets/fonts/silkscreen.ttf')
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Near Station</Text>
        {
          stationList
          ?  <SelectStation
            style={styles.selectSection}
            currentLocation={currentLocation}
            stationList={stationList}
            setStation={setStation}
          />
          : <Image
            style={styles.loading}
            source={require('../assets/images/loading.gif')}
          />
        }
        <TouchableOpacity
          onPress={() => {
            dispatch(selectedStation(station))
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
  selectSection: {
    height: '50%',
    marginTop: '20%'
  },
  title: {
    fontSize: 30,
    color: '#23374d',
    textAlign: 'center',
    fontFamily: 'silkscreen',
    marginTop: '30%'
  },
  loading: {
    marginTop: '10%',
    width: '50%',
    height: '30%',
  },
  EnterButton: {
    color: '#23374d',
    fontSize: 20,
    fontFamily: 'silkscreen',
    marginBottom: '20%'
  }
});
