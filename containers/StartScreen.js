import React, { useEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { receiveLocation } from '../actions/index';

import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import locationAPI from '../api/locationAPI';

export default function StartScreen ({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const location = await locationAPI();
      dispatch(receiveLocation(location.latitude, location.longitude));
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
