import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';


export default SelectTrainDetail = ({ trainList, setTrain }) => {
  console.log(trainList)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Real-Time Arrivals</Text>
      {
        trainList
        && <RadioForm
          radio_props={trainList}
          initial={0}
          buttonColor={'#1089ff'}
          labelStyle={{ fontSize: 17, fontFamily: 'silkscreen' }}
          onPress={(value) => setTrain(value)}
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
  title: {
    fontSize: 30,
    color: '#23374d',
    textAlign: 'center',
    fontFamily: 'silkscreen'
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
  station: {
    fontFamily: 'sans-serif',
    marginBottom: 10
  },
  radioContainer: {
    marginBottom: '5%'
  },
  radio: {
    color: '#1089ff'
  }
});