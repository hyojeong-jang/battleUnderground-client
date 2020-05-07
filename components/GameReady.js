import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default GameReady = ({
  user,
  setAllReady,
  participants,
  dispatchReadyUsers
}) => {
  let readyCount = 0;

  useEffect(() => {
    participants.forEach(participant => {
      if (participant.ready) readyCount += 1;
      if (readyCount === 2) setAllReady(true);
    });
  }, [participants]);

  return (
    <View style={styles.container}>
      <View style={styles.gameSection}>
        {
          participants[0]
          && <TouchableOpacity
            style={styles.readyButton}
            onPress={() => {
              participants[0].name === user
              && dispatchReadyUsers()
            }}
          >
            <Text style={styles.user}>{participants[0].name}</Text>
            {
              participants[0].ready
              ? <Image source={require('../assets/images/ready.png')} />
              : <Image source={require('../assets/images/notReady.png')} />
            }
          </TouchableOpacity>
        }
        {
          participants[1]
          && <TouchableOpacity
            style={styles.readyButton2}
            onPress={() => {
              participants[1].name === user
              && dispatchReadyUsers();
            }}
          >
            <Text style={styles.user}>{participants[1].name}</Text>
            {
              participants[1].ready
              ? <Image source={require('../assets/images/ready.png')} />
              : <Image source={require('../assets/images/notReady.png')} />
            }
          </TouchableOpacity>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 3,
    width: '98%',
    marginBottom: '2%',
    marginTop: '2%',
    backgroundColor: 'white'
  },
  user: {
    fontFamily: 'dunggeunmo',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: '5%'
  },
  gameSection: {
    alignSelf: 'center',
  }
});