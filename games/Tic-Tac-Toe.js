import React, { useState, useCallback, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export default TicTacToe = ({
  user,
  room,
  initialTurn,
  opponent,
  gameStatus,
  updateGameInfo
}) => {
  const [ turn, setTurn ] = useState(initialTurn);
  const [ userSelected, setUserSelected ] = useState([]);
  const [ opponentSelected, setOpponentSelected ] =  useState([]);

  const onBoxPress = useCallback((box) => {
    setTurn(!turn)
    if (turn) {
      const gameInfo = {
        room,
        name: user,
        turn,
        // turn: !initialTurn,
        selectBox: box
      };
      updateGameInfo(gameInfo);
    } else {
      console.log('----------------not my turn--------------------')
    }
  }, [turn]);

  useEffect(() => {
    gameStatus.forEach((el) => {
      if (el.name === user) {
        setTurn(el.turn);
        setUserSelected(el.selectedBoxes);
      } else {
        setOpponentSelected(el.selectedBoxes);
      }
    })
  }, [gameStatus]);

  return (
    <View style={styles.container}>
      { [1, 2, 3, 4, 5, 6, 7, 8, 9].map((el,idx) => {
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
    backgroundColor: '#333300',
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