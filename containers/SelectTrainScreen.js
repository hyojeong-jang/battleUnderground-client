import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text } from 'react-native';

import { selectedTrain } from '../actions/index';

import { receiveRealTimeArrivalList } from '../api/seoulAPI';
import SelectTrainDetail from '../components/SelectTrainDetail';

export default function SelectTrainScreen ({ navigation }) {
  const dispatch = useDispatch();
  // const dispatchSelectedTrain = dispatch(selectedTrain(train))
  const userStation = useSelector(state => state.subway.station).split(' ')[0];

  const [ trainList, setTrainList ] = useState(null);
  const [ train, setTrain ] = useState(null);
  console.log(train)
  useEffect(() => {
    const getRealTimeArrivalList = async () => {
      const response = await receiveRealTimeArrivalList(userStation);
      setTrainList(response)
    }
    getRealTimeArrivalList();
  }, [])

  return (
    <View>
      <Text>
        <SelectTrainDetail trainList={trainList} setTrain={setTrain} />
      </Text>
    </View>
  );
}