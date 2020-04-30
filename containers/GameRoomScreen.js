import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import GameReady from '../components/GameReady';
import GameRoomHeader from '../components/GameRoomHeader';
import * as socketActions from '../actions/socket';

import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

export default function GameRoomScreen ({ navigation }) {
  const dispatch = useDispatch();

  const [ errorMsg, setErrorMsg ] = useState(null);
  const [ allReady, setAllReady ] = useState(false);

  const room = useSelector(state => state.socket.room);
  const train = useSelector(state => state.subway.train);
  const nickname = useSelector(state => state.user.nickname);
  const participants = useSelector(state => state.socket.participants);

  const [fontsLoaded] = useFonts({
    'silkscreen': require('../assets/fonts/silkscreen.ttf')
  });
  console.log(allReady)
  useEffect(() => {
    return navigation.addListener('focus', () => {
      dispatch(socketActions.socketConnect(train));
      dispatch(socketActions.socketJoin(train, nickname));
    });
  }, [navigation, train, nickname])

  const dispatchReadyUsers = useCallback(() => {
    dispatch(socketActions.dispatchReadyUsers(room, nickname, train));
  }, [room, nickname])

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <GameRoomHeader style={styles.header} text={train} />
        {
          allReady
          ? console.log(allReady)
          : <GameReady
            user={nickname}
            setAllReady={setAllReady}
            participants={participants}
            dispatchReadyUsers={dispatchReadyUsers}
          />
        }
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
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    marginTop: '5%'
  }
});
