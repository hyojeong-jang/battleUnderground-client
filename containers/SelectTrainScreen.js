import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { selectedTrain } from '../actions/index';

import { receiveRealTimeArrivalList } from '../api/seoulAPI';
import SelectTrain from '../components/SelectTrainDetail';

export default function SelectTrainScreen ({ navigation }) {
  const dispatch = useDispatch();
  const userStation = useSelector(state => state.subway.station);

  const [ trainList, setTrainList ] = useState(null);
  const [ train, setTrain ] = useState(null);

  useEffect(() => {
    const getRealTimeArrivalList = async () => {
      const station = userStation.split(' ')[0]
      const response = await receiveRealTimeArrivalList(station);
      setTrainList(response);
    }
    getRealTimeArrivalList();
  }, [])

  return (
    <View style={styles.container}>
      {
        trainList
        ? <SelectTrain
          station={userStation}
          trainList={trainList}
          setTrain={setTrain}
        />
        : <Image
          style={styles.loading}
          source={require('../assets/images/loading.gif')}
        />
      }
       <TouchableOpacity
        onPress={() => {
          dispatch(selectedTrain(train))
          navigation.navigate('Home')
        }}
      >
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
    alignContent: 'space-between',
    backgroundColor: 'white'
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
  }
});