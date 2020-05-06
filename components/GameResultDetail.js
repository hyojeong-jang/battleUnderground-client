import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default GameResultDetail = ({
  isWinner,
  onHomePress,
  onAnotherRoomPress,
  onOneMoreRoundPress,
  onTopRankingButtonPress
}) => {
  return (
    <View style={styles.container}>
      {
        isWinner
        ? isWinner === 'true'
          ? <Image style={styles.image} source={require('../assets/images/win.gif')} />
          : <Image style={styles.image} source={require('../assets/images/win.gif')} />
        : <Image style={styles.image} source={require('../assets/images/lose.gif')} />
      }
      <Text style={styles.title}>{`${isWinner ? isWinner === true ? 'win' : 'draw' : 'lose'}!`}</Text>
      <TouchableOpacity
        style={styles.oneMoreRound}
        onPress={onOneMoreRoundPress}
      >
        <Text style={styles.text}>
          One more round
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.anotherRoom}
        onPress={onAnotherRoomPress}
      >
        <Text style={styles.text}>
          Another room
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.home}
        onPress={onHomePress}
      >
        <Text style={styles.text}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.topRankingBoard}
        onPress={onTopRankingButtonPress}
      >
        <Text style={styles.text}>
          Top Rank Board
        </Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontFamily: 'silkscreen',
    textAlign: 'center',
    fontSize: 40
  },
  image: {
    width: '25%',
    height: '15%',
    alignSelf: 'center'
  },
  text: {
    fontFamily: 'dunggeunmo',
    fontSize: 20,
    textAlign: 'center'
  },
  oneMoreRound: {
    marginTop: 30,
    backgroundColor: 'green',
    height: 40
  },
  anotherRoom: {
    marginTop: 30,
    backgroundColor: 'blue',
    height: 40
  },
  home: {
    marginTop: 30,
    backgroundColor: 'purple',
    height: 40
  },
  topRankingBoard: {
    marginTop: 30,
    backgroundColor: 'red',
    height: 40
  }
})