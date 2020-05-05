import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { receiveLocation } from '../actions/index';

import { AppLoading } from 'expo';
import * as Location from 'expo-location';
import { useFonts } from '@use-expo/font';

export default function StartScreen ({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      dispatch(receiveLocation(location.coords.latitude, location.coords.longitude));
    })();
  }, []);

  const [fontsLoaded] = useFonts({
    'silkscreen': require('../assets/fonts/silkscreen.ttf')
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        <Image source={require('../assets/images/train.gif')}/>
        <TouchableOpacity
          onPress={() => navigation.navigate('SelectStation')}
        >
          <Image
            source={require('../assets/images/startButton.png')}
            style={styles.button}
          />
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
    backgroundColor: 'white'
  },
  logo: {
    width: 340,
    height: 90,
    marginBottom: '10%'
  },
  button: {
    marginTop: '17%'
  }
});
