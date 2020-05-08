import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Image, StyleSheet } from 'react-native';

import { selectedTrain } from '../actions/index';

import { receiveRealTimeArrivalList } from '../api/seoulAPI';
import SelectTrain from '../components/SelectTrainDetail';
import AlertError from '../components/AlertError';

export default function SelectTrainScreen ({ navigation }) {
  const dispatch = useDispatch();
  const userStation = useSelector(state => state.subway.station);

  const [ trainList, setTrainList ] = useState(null);
  const [ train, setTrain ] = useState(null);
  const [ error, setError ] = useState(false);

  useEffect(() => {
    return navigation.addListener('focus', async () => {
      try {
        const station = userStation.split(' ')[0];
        const response = await receiveRealTimeArrivalList(station);

        setTrainList(response);
      } catch (error) {
        setError(true);
      }
    })
  }, [navigation])

  const onPressButton = useCallback(() => {
    dispatch(selectedTrain(train));
    navigation.navigate('Home');
  }, [train]);

  return (
    <View style={styles.container}>
      {
        trainList
        && <SelectTrain
          station={userStation}
          trainList={trainList}
          setTrain={setTrain}
          onPressButton={onPressButton}
        />
      }
      {
        !trainList && error
        ? <AlertError navigation={navigation} />
        : <Image
          style={styles.loading}
          source={require('../assets/images/loading.gif')}
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
    alignContent: 'space-between',
    backgroundColor: 'white'
  },
  loading: {
    marginTop: '10%',
    width: '50%',
    height: '30%'
  }
});