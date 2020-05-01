import React, { useCallback } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

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
            <Image
              style={styles.box}
              accessibilityValue={el}
              source={require('../assets/images/background.png')}
            />
          </TouchableOpacity>
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '5%',
    width: '100%',
    height: '50%',
  },
  box: {
    width: '100%',
    height: '100%',
  },
  boxContainer: {
    backgroundColor: '#1e4729',
    width: '32%',
    height: '32%'
  }
});