import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Header = ({ trainInfo }) => {
  return (
    <View style={styles.container}>
      {
        trainInfo
        ? <Text>{trainInfo}</Text>
        : <Text>탑승 열차를 선택해주세요</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerContainer: {
    fontFamily: 'silkscreen',
    fontSize: 15,
  },
});