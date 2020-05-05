import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';


export default SelectTrainDetail = ({
  trainList,
  setTrain,
  station,
  onPressButton
}) => {
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
          labelStyle={{ fontSize: 15, fontFamily: 'dunggeunmo' }}
          onPress={(value) => setTrain(value)}
        />
      }
      <TouchableOpacity onPress={onPressButton}>
        <Text style={styles.EnterButton}>Enter Train</Text>
      </TouchableOpacity>
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
    fontFamily: 'dunggeunmo',
    marginBottom: 15,
    fontSize: 15
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
    width: '60%',
    marginBottom: '5%',
    marginTop: '5%'
  },
  EnterButton: {
    color: '#23374d',
    fontSize: 20,
    fontFamily: 'silkscreen',
    marginTop: '10%'
  }
});