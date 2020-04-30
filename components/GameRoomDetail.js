import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Game from '../games/Tic-Tac-Toe'

export default GameRoomDetail = ({ dispatch }) => {
  return (
    <View style={styles.container}>
      <Text>game room detail </Text>
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
  }
});