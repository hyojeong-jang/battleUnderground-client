import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default GameRoomHeader = ({ text }) => {
  const [ textBlink, setTextBlink ] = useState(true);

  // setInterval(() => {
  //   setTextBlink(!textBlink);
  // }, 1000);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>타신 열차</Text>
        <Text style={styles.text}>
          {textBlink ? text : ''}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '7%',
    borderStyle: 'solid',
    borderWidth: 8,
    borderColor: '#262729'
  },
  innerContainer: {
    backgroundColor: '#323336',
    width: '100%',
    height: '100%'
  },
  title: {
    textAlign: 'center',
    color: '#336600',
    fontFamily: 'dunggeunmo',
  },
  text: {
    textAlign: 'center',
    color: '#ff9900',
    fontFamily: 'dunggeunmo'
  }
});
