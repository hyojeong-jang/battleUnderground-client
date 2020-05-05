import React, { useState, useCallback, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import _ from 'lodash';

export default TicTacToe = ({
  id,
  user,
  room,
  winner,
  opponent,
  gameScore,
  gameStatus,
  navigation,
  initialTurn,
  selectedBoxes,
  updateGameInfo,
  receiveGameStatus,
  dispatchGameResult
}) => {
  const winningCase = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  const [ turn, setTurn ] = useState(initialTurn);
  const [ userSelected, setUserSelected ] = useState([]);
  const [ opponentSelected, setOpponentSelected ] =  useState([]);

  const selected = userSelected.concat(opponentSelected);

  const onBoxPress = useCallback((box) => {
    if (turn && !selectedBoxes.includes(box)) {
      const gameInfo = {
        room,
        name: user,
        turn: !turn,
        selectBox: box
      };
      updateGameInfo(gameInfo);
    }
  });

  useEffect(() => {
    receiveGameStatus(room);
    if (winner.length) {
      navigation.navigate('GameResult');
    }
  }, [gameStatus, winner])

  useEffect(() => {
    gameStatus.forEach((el) => {
      if (el.name === user) {
        setTurn(el.turn);
        setUserSelected(el.selectedBoxes);
      } else {
        setTurn(!el.turn);
        setOpponentSelected(el.selectedBoxes);
      }
    })

    if (selected.length === 9) {
      return dispatchGameResult('draw');
    }

    if (userSelected.length >= 3) {
      winningCase.some((oneCase) => {
        const result = _.xor(oneCase, userSelected);
        if (result.length === userSelected.length - 3) {
          return dispatchGameResult(room, 'win', user, id, gameScore);
        }
      })
    }
  }, [selectedBoxes]);

  // return navigation.navigate('GameResult');

  return (
    <View style={styles.container}>
      { [0, 1, 2, 3, 4, 5, 6, 7, 8].map((el,idx) => {
        return <TouchableOpacity
          key={idx}
          style={styles.boxContainer}
          onPress={() => onBoxPress(el)}
        >
          <View style={styles.box}>
            {
              userSelected.includes(el)
              ? initialTurn
                ? <Image style={styles.mark} source={require('../assets/images/first.png')} />
                : <Image style={styles.mark} source={require('../assets/images/second.png')} />
              : []
            }
            {
              opponentSelected.includes(el)
              ? !initialTurn
                ? <Image style={styles.mark} source={require('../assets/images/first.png')} />
                : <Image style={styles.mark} source={require('../assets/images/second.png')} />
              : []
            }
          </View>
        </TouchableOpacity>
      })}
      <Text style={styles.turn}>{`${turn ? user : opponent}'s turn`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '2%',
    marginBottom: '2%',
    width: '95%',
    height: '50%',
  },
  box: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#ffcc00',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid'
  },
  boxContainer: {
    width: '33%',
    height: '33%',
    padding: 2
  },
  turn: {
    fontFamily: 'dunggeunmo',
    fontSize: 15,
    textAlign: 'center'
  },
  mark: {
    width: '80%',
    height: '100%'
  }
});
