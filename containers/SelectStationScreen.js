import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import RadioForm from 'react-native-simple-radio-button';

import { selectedStation } from '../actions/index';
import { receiveNearStation } from '../api/seoulAPI';
import { getAddress } from '../api/geocoding';

export default function SelectStationScreen () {
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
        <Text style={styles.title}>Near Station</Text>
        <Text style={styles.subTitle}>Current Location</Text>
        <Text style={styles.location}>{currentLocation}</Text>
        {
          stationList
          ? <RadioForm
            radio_props={stationList}
            initial={0}
            buttonColor={'#1089ff'}
            labelStyle={{ fontSize: 17, fontFamily: 'silkscreen' }}
            onPress={(value) => setUserStation(value)}
          />
          : <Image
            style={styles.loading}
            source={require('../assets/images/loading.gif')}
          />
        }
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
  title: {
    fontSize: 30,
    color: '#23374d',
    textAlign: 'center',
    fontFamily: 'silkscreen'
  },
  subTitle: {
    marginTop: '7%',
    marginBottom: 10,
    color: 'gray',
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'sans-serif',
  },
  location: {
    marginBottom: '10%',
    fontSize: 20,
    width: '70%',
    fontFamily: 'silkscreen'
  },
  loading: {
    marginTop: '10%',
    width: '50%',
    height: '30%',
  },
  station: {
    fontFamily: 'sans-serif',
    marginBottom: 10
  },
  radioContainer: {
    marginBottom: '5%'
  },
  radio: {
    color: '#1089ff'
  },
  EnterButton: {
    marginTop: '10%',
    color: '#23374d',
    fontSize: 20,
    fontFamily: 'silkscreen'
  }
});
