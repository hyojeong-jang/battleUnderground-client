import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import GameRoomDetail from '../components/GameRoomDetail';
import GameRoomHeader from '../components/GameRoomHeader';
import * as socketActions from '../actions/socket';

import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

export default function GameRoomScreen ({ navigation }) {
  const dispatch = useDispatch();
  const [ errorMsg, setErrorMsg ] = useState(null);
  const [ allReady, setAllReady ] = useState(0);


  const train = useSelector(state => state.subway.train);
  const nickname = useSelector(state => state.user.nickname);
  // const room = useSelector(state => state.socket.room);

  const [fontsLoaded] = useFonts({
    'silkscreen': require('../assets/fonts/silkscreen.ttf')
  });


  useEffect(() => {
    return navigation.addListener('focus', () => {
      dispatch(socketActions.socketConnect(train));
      dispatch(socketActions.socketJoin(train, nickname));
    });
  }, [navigation])

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <GameRoomHeader style={styles.header} text={train} nickname={nickname} />
        <Text>
          {
            allReady
            && <GameRoomDetail setReady={dispatch} />
          }
        </Text>
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
