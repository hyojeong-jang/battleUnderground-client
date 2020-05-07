import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

import * as actions from '../actions/index';
import { saveUserData, receiveUserData } from '../api/userAPI';

export default HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const id = useSelector(state => state.user.id);
  const train = useSelector(state => state.subway.train);
  const station = useSelector(state => state.subway.station);
  const userNickname = useSelector(state => state.user.nickname);

  const [ nickname, onChangeText ] = useState('');

  const [ fontsLoaded ] = useFonts({
    'silkscreen': require('../assets/fonts/silkscreen.ttf'),
    'dunggeunmo': require('../assets/fonts/DungGeunMo.ttf')
  });

  const onButtonPress = useCallback(async () => {
    dispatch(actions.saveUser(nickname));

    if (id) {
      const document = await receiveUserData(id, nickname);
      dispatch(actions.dispatchExistUserDocument(document));
    } else  {
      const document = await saveUserData(nickname, train, station);
      dispatch(actions.dispatchUserDocument(document));
    }
    navigation.navigate('GameRoom');
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{train}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={text => onChangeText(text)}
            placeholder='enter your nickname'
            defaultValue={userNickname}
            value={nickname}
          />
        </View>
        <TouchableOpacity onPress={onButtonPress}>
          <Text style={styles.enterButton}>
            {`Start a game\nwith\nsomeone on this train`}
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
    backgroundColor: '#9a9a9a'
  },
  header: {
    width: '90%',
    height: '5%',
    fontSize: 15,
    fontFamily: 'dunggeunmo',
    textAlign: 'center',
    color: 'white',
  },
  inputContainer: {
    width:'80%',
  },
  textInput: {
    borderColor: 'white',
    color: 'white',
    textDecorationColor: 'white',
    borderWidth: 3,
    padding: 10,
    height: 50,
    fontFamily: 'silkscreen',
    marginBottom: '10%'
  },
  enterButton: {
    fontFamily: 'silkscreen',
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  }
});