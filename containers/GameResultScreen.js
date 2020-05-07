import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import * as socketActions from '../actions/socket';
import * as actions from '../actions/index';

import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

import GameResultDetail from '../components/GameResultDetail';

export default GameResultScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [ isWinner, setIsWinner ] = useState(null);

  const room = useSelector(state => state.socket.room);
  const winner = useSelector(state => state.socket.winner);
  const nickname = useSelector(state => state.user.nickname);

  const onOneMoreRoundPress = useCallback(() => {
    // dispatch(actions.clearGameStatus());
  });

  const onAnotherRoomPress = useCallback(() => {
    dispatch(socketActions.closeGameRoom(room));
    navigation.navigate('Home');
  });

  const onTransferPress = useCallback(() => {
    navigation.navigate('Transfer');
  });

  const onTopRankingButtonPress = useCallback(() => {
    navigation.navigate('TopRanking');
  });

  useEffect(() => {
    return navigation.addListener('focus', () => {
      winner.forEach(user => {
        if (user.nickname === nickname) {
          return setIsWinner(user.isWinner);
        }
      });
    });
  }, [navigation]);

  const [fontsLoaded] = useFonts({
    'silkscreen': require('../assets/fonts/silkscreen.ttf'),
    'dunggeunmo': require('../assets/fonts/DungGeunMo.ttf')
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <GameResultDetail
          isWinner={isWinner}
          onTransferPress={onTransferPress}
          onAnotherRoomPress={onAnotherRoomPress}
          onOneMoreRoundPress={onOneMoreRoundPress}
          onTopRankingButtonPress={onTopRankingButtonPress}
        />
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
    justifyContent: 'center'
  }
});
