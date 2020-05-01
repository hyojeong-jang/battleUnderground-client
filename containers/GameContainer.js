import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

import * as socketActions from '../actions/socket';
import TicTacToe from '../games/Tic-Tac-Toe';
import Chat from '../containers/Chat';

export default GameContainer = ({ user, socketRoom, participants }) => {
  const dispatch = useDispatch();
  const station = useSelector(state => state.subway.train);

  const [ turn, setTurn ] = useState(null);
  const [ opponent, setOpponent ] = useState(null);
  const [ startSign, setStartSign ] = useState(true);

  const isUserTurn = (participants, user) => {
    const isTurn = { 0: true, 1: false };

    participants.forEach((participant, idx) => {
      if (user === participant.name) {
        setTurn(isTurn[idx]);
      } else {
        setOpponent(participant.name);
      }
    })
    return turn;
  }

  useEffect(() => {
    const InitialInfo = {
      name: user,
      turn: isUserTurn(participants, user),
      selectedBox: [],
      userSelected: [],
      winner: null,
      score: null,
      station
    };
    dispatch(socketActions.dispatchUserInitialInfo(InitialInfo));
    setTimeout(() => {
      setStartSign(false);
    }, 3000);
  }, [])

  const [fontsLoaded] = useFonts({
    'dunggeunmo': require('../assets/fonts/DungGeunMo.ttf')
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        {
          startSign
          ? <View>
            <Text style={styles.firstTurn}>
              {`${turn ? user : opponent }'s turn`}
            </Text>
            <Text style={styles.secondTurn}>
              {`next is ${turn ? opponent : user}`}
            </Text>
          </View>
          : <View style={styles.mainSection}>
            <TicTacToe style={styles.game} />
            <Chat
              style={styles.chat}
              nickname={user}
              room={socketRoom}
            />
          </View>
        }
      </View>
    )
  } else {
    return <AppLoading />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  mainSection: {
    flex: 1,
    flexDirection: 'column'
  },
  firstTurn : {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'dunggeunmo',
    color: 'red'
  },
  secondTurn: {
    fontSize: 15,
    marginTop: 5,
    textAlign: 'center',
    fontFamily: 'dunggeunmo',
  }
});