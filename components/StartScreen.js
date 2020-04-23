import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { receiveLocation } from '../actions/index';

import { AppLoading } from 'expo';
import * as Location from 'expo-location';
import { useFonts } from '@use-expo/font';

export default function StartScreen ({ navigation }) {
  const [ errorMsg, setErrorMsg ] = useState(null);

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
          <Text style={styles.startButton}>
            start
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
    backgroundColor: 'white'
  },
  logo: {
    width: 340,
    height: 90,
    marginLeft: '9%',
    marginBottom: '10%'
  },
  startButton: {
    fontFamily: 'silkscreen',
    fontSize: 30,
    textAlign: 'center',
    marginTop: '15%',
  }
});
