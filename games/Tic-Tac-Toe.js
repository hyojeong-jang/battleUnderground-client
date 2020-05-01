import React, { useCallback } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export default TicTacToe = () => {
  const onBoxPress = useCallback((e) => {
    console.log(e.target.value)
  })
  return (
    <View style={styles.container}>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => {
          return <TouchableOpacity
            key={el}
            style={styles.boxContainer}
            onPress={onBoxPress}
          >
            <View style={styles.box}></View>
            {/* <Image
              style={styles.box}
              source={require('../assets/images/background.png')}
            /> */}
          </TouchableOpacity>
        })
      }
      <Text style={styles.turn}>user1's turn</Text>
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
    backgroundColor: '#ff9900',
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
  }
});