import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

import locationAPI from '../api/locationAPI';
import { getAddress } from '../api/geocodingAPI';
import { receiveNearStation } from '../api/seoulAPI';
import { selectedStation } from '../actions/index';

import RadioForm from 'react-native-simple-radio-button';
import AlertError from '../components/AlertError';

export default TransferScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [ currentLocation, setCurrentLocation ] = useState(null);
  const [ stationList, setStationList ] = useState(null);
  const [ station, setStation ] = useState(null);
  const [ error, setError ] = useState(false);

  useEffect(() => {
    return navigation.addListener('focus', async () => {
      try {
        const location = await locationAPI();
        const address = await getAddress(location.longitude, location.latitude);
        const stations = await receiveNearStation(location.longitude, location.latitude);

        setCurrentLocation(address);
        setStationList(stations);
      } catch (error) {
        setError(true)
      }
    })
  }, []);

  const onbuttonPress = useCallback(() => {
    dispatch(selectedStation(station));
    navigation.navigate('SelectTrain');
  }, [station])

  const [fontsLoaded] = useFonts({
    'dunggeunmo': require('../assets/fonts/DungGeunMo.ttf')
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{`Select\n Transfer Station`}</Text>
          <Text style={styles.subTitle}>Real-Time location</Text>
        <View style={styles.subTitleContainer}>
        <Text style={styles.location}>{currentLocation}</Text>
        </View>
        <View style={styles.select}>
        {
          !stationList
          ? error
           ? <AlertError navigation={navigation} />
           : <Image
            style={styles.loading}
            source={require('../assets/images/loading.gif')}
            />
          : <RadioForm
            style={styles.radio}
            radio_props={stationList}
            initial={0}
            buttonColor={'#1089ff'}
            labelStyle={{ fontSize: 17, fontFamily: 'dunggeunmo' }}
            onPress={(value) => setStation(value)}
          />
        }
        </View>
        <TouchableOpacity onPress={onbuttonPress}>
          <Text style={styles.button}>Transfer</Text>
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
    alignContent: 'center',
    backgroundColor: 'white',
    padding: '5%'
  },
  title: {
    marginTop: '20%',
    color: '#23374d',
    fontFamily: 'dunggeunmo',
    fontSize: 30,
    textAlign: 'center'
  },
  subTitleContainer: {
    alignSelf: 'center',
    width: '80%'
  },
  subTitle: {
    marginTop: '10%',
    marginBottom: '5%',
    fontFamily: 'dunggeunmo',
    fontSize: 15,
    textAlign: 'center'
  },
  radio: {
    marginBottom: '10%'
  },
  locationMark: {
    width: 30,
    height: 30
  },
  location: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'dunggeunmo'
  },
  select: {
    marginTop: '10%',
    marginBottom: '10%',
    alignSelf: 'center',
  },
  button: {
    fontFamily: 'dunggeunmo',
    fontSize: 20,
    textAlign: 'center',
    color: '#23374d'
  }
});