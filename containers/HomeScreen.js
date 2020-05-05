import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

import HomeHeader from '../components/HomeHeader';

import * as actions from '../actions/index';
import { saveUserData } from '../api/userAPI';

export default HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const train = useSelector(state => state.subway.train);
  const station = useSelector(state => state.subway.station);
  const userNickname = useSelector(state => state.user.nickname);
  const [ nickname, onChangeText ] = useState('');

  const [ fontsLoaded ] = useFonts({
    'silkscreen': require('../assets/fonts/silkscreen.ttf')
  });

  const onButtonPress = useCallback(async () => {
    dispatch(actions.saveUser(nickname))
    const document = await saveUserData(nickname, train, station);
    dispatch(actions.dispatchUserDocument(document));
    navigation.navigate('GameRoom');
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <HomeHeader
          style={styles.header}
          trainInfo={train}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={text => onChangeText(text)}
            placeholder='enter your nickname'
            defaultValue={userNickname}
            value={nickname}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onButtonPress}
        >
          <Text style={styles.enterButton}>
            Start a game
          </Text>
          <Text style={styles.enterButton}>
            with someone on this train
          </Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return <AppLoading />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '90%',
    height: '10%',
    marginTop: '30%'
  },
  inputContainer: {
    flex: 3,
    width:'80%',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 3,
    height: '10%',
    fontFamily: 'silkscreen'
  },
  enterButton: {
    fontFamily: 'silkscreen',
    textAlign: 'center',
    fontSize: 17,
    color: 'red'
  },
  buttonContainer: {
    flex: 3,
  }
});