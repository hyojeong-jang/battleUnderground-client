import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Game from '../games/Tic-Tac-Toe'

export default GameReady = ({
  user,
  setAllReady,
  participants,
  dispatchReadyUsers
}) => {
  const [ ready, setReady ] = useState(false);

  let readyCount = 0;
  useEffect(() => {
    participants.forEach(participant => {
      if (participant.ready) readyCount += 1;
      if (readyCount === 2) setAllReady(true);
      if (participant.name === user) {
        setReady(participant.ready);
      }
    });
  }, [participants])

  return (
    <View style={styles.container}>
      <View style={styles.gameSection}>
        { participants.map((participant, idx) => {
          return <TouchableOpacity
            key={idx}
            onPress={() => {
              participant.name === user
              && dispatchReadyUsers();
            }}
          >
            <Text style={styles.user}>{participant.name}</Text>
           {
              ready
              ? <Image source={require('../assets/images/ready.png')} />
              : <Image source={require('../assets/images/notReady.png')} />
            }
          </TouchableOpacity>
        })}
      </View>
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
  readyButton: {
    alignContent: 'center'
  },
  user: {
    fontFamily: 'dunggeunmo',
    fontSize: 20
  }
});