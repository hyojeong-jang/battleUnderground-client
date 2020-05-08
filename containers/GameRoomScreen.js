import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import GameReady from '../components/GameReady';
import GameRoomHeader from '../components/GameRoomHeader';
import GameContainer from '../containers/GameContainer';
import ChatContainer from '../containers/ChatContainer';

import * as socketActions from '../actions/socket';

import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

export default function GameRoomScreen ({ navigation }) {
  const dispatch = useDispatch();

  const room = useSelector(state => state.socket.room);
  const train = useSelector(state => state.subway.train);
  const nickname = useSelector(state => state.user.nickname);
  const participants = useSelector(state => state.socket.participants);

  const [ allReady, setAllReady ] = useState(false);
  const [fontsLoaded] = useFonts({
    'silkscreen': require('../assets/fonts/silkscreen.ttf'),
    'dunggeunmo': require('../assets/fonts/DungGeunMo.ttf')
  });

  useEffect(() => {
    return navigation.addListener('focus', () => {
      dispatch(socketActions.socketConnect(train));
      dispatch(socketActions.socketJoin(train, nickname));
      dispatch(socketActions.receiveChatList());
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
          ? <GameContainer
            style={styles.game}
            user={nickname}
            room={room}
            participants={participants}
            navigation={navigation}
          />
          : <GameReady
            style={styles.ready}
            user={nickname}
            setAllReady={setAllReady}
            participants={participants}
            dispatchReadyUsers={dispatchReadyUsers}
          />
        }
        <ChatContainer
          style={styles.chat}
          nickname={nickname}
          room={room}
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dddddd',
    paddingTop: 25,
  }
});
