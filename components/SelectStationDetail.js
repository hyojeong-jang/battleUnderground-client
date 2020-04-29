import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';


export default SelectStationDetail = ({ currentLocation, stationList, setStation }) => {
  return (
    <View style={styles.container}>
      <Image
          style={styles.locationIcon}
          source={require('../assets/images/location.png')}
        />
      <Text style={styles.location}>{currentLocation}</Text>
      {
        stationList
        && <RadioForm
          radio_props={stationList}
          initial={0}
          buttonColor={'#1089ff'}
          labelStyle={{ fontSize: 17, fontFamily: 'dunggeunmo' }}
          onPress={(value) => setStation(value)}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  locationIcon: {
    marginTop: '5%',
    marginBottom: 5,
    width: 30,
    height: 30
  },
  location: {
    marginBottom: '10%',
    fontSize: 20,
    width: '70%',
    textAlign: 'center',
    fontFamily: 'silkscreen'
  },
  loading: {
    marginTop: '10%',
    width: '50%',
    height: '30%',
  },
  radioContainer: {
    marginBottom: '5%'
  },
  radio: {
    color: '#1089ff'
  }
});