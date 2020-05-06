import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default TopRanking = ({ navigation }) => {
  const rankingList = useSelector(state => state.socket.topRanking);
  console.log(rankingList)
  return (
    <View style={styles.container}>
      {
        rankingList.map((user, idx) => {
          return <View key={idx} style={styles.user}>
            <Text>{user.station}</Text>
            <Text>{user.nickname}</Text>
            <Text>{user.game_score}</Text>
          </View>
        })
      }
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
      >
        <Text>
          Home
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  user:{
    textAlign: 'center'
  }
})