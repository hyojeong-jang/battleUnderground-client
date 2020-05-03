import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';


export default SelectStationDetail = ({
  currentLocation,
  stationList,
  setStation,
  onbuttonPress
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Near Station</Text>
      <Image
          style={styles.locationIcon}
          source={require('../assets/images/location.png')}
        />
        <View style={styles.locationContainer}>
          <Text style={styles.location}>{currentLocation}</Text>
        </View>
      {
        stationList
        && <RadioForm
          style={styles.radio}
          radio_props={stationList}
          initial={0}
          buttonColor={'#1089ff'}
          labelStyle={{ fontSize: 17, fontFamily: 'dunggeunmo' }}
          onPress={(value) => setStation(value)}
        />
      }
        <TouchableOpacity onPress={onbuttonPress}>
          <Text style={styles.EnterButton}>Enter Station</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '50%',
    alignItems: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 30,
    color: '#23374d',
    textAlign: 'center',
    fontFamily: 'silkscreen',
    marginTop: '10%',
    marginBottom: '5%'
  },
  locationIcon: {
    marginTop: '5%',
    marginBottom: 5,
    width: 30,
    height: 30
  },
  locationContainer: {
    width: '70%'
  },
  location: {
    marginBottom: '20%',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'dunggeunmo'
  },
  loading: {
    marginTop: '10%',
    width: '50%',
    height: '30%'
  },
  radio: {
    marginBottom: '10%'
  },
  EnterButton: {
    color: '#23374d',
    fontSize: 20,
    fontFamily: 'silkscreen'
  }
});