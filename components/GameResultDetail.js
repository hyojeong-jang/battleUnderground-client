import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default GameResultDetail = ({
  isWinner,
  onTransferPress,
  onAnotherRoomPress,
  onOneMoreRoundPress,
  onTopRankingButtonPress
}) => {
  return (
    <View style={styles.container}>
      {
        isWinner
        ? isWinner === 'draw'
          ? <Image style={styles.image} source={require('../assets/images/draw.gif')} />
          : <Image style={styles.image} source={require('../assets/images/win.gif')} />
        : <Image style={styles.image} source={require('../assets/images/lose.gif')} />
      }
      <Text style={styles.title}>{`${isWinner ? isWinner === true ? 'win' : 'draw' : 'lose'}!`}</Text>
      <TouchableOpacity
        style={styles.oneMoreRound}
        onPress={onOneMoreRoundPress}
      >
        <Text style={styles.text}>
          oneMoreRound
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={onAnotherRoomPress}
      >
        <Text style={styles.text}>
          Another room
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={onTransferPress}
      >
        <Text style={styles.text}>
          Transfer
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={onTopRankingButtonPress}
      >
        <Text style={styles.topRankText}>
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
    backgroundColor: 'white'
  },
  title: {
    fontFamily: 'dunggeunmo',
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 30
  },
  image: {
    width: '30%',
    height: '18%',
    alignSelf: 'center'
  },
  text: {
    fontFamily: 'dunggeunmo',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5
  },
  oneMoreRound: {
    marginTop: 30,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'black',
    width: '50%',
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: '#9a9a9a',
    height: 40
  },
  button: {
    marginTop: 30,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'black',
    width: '50%',
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: '#dddddd',
    height: 40
  },
  topRankText: {
    fontFamily: 'dunggeunmo',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
    color: 'red'
  }
})