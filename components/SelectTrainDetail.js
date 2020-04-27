import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';


export default SelectTrainDetail = ({ trainList, setTrain, station }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>{station}</Text>
      <Text style={styles.title}>Real-Time Arrivals</Text>
      {
        trainList
        && <RadioForm
          style={styles.radio}
          radio_props={trainList}
          initial={0}
          buttonColor={'#1089ff'}
          labelStyle={{ fontSize: 15, fontFamily: 'silkscreen' }}
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
    fontFamily: 'silkscreen',
    marginBottom: '10%'
  },
  subTitle:{
    fontFamily: 'silkscreen',
    marginBottom: 10
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
    width: '60%'
  }
});