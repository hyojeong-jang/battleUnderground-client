import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

export default function SelectStationScreen () {
  const longitude = useSelector(state => state.location.longitude);
  const latitude = useSelector(state => state.location.latitude);

  const [fontsLoaded] = useFonts({
    'silkscreen': require('../assets/fonts/silkscreen.ttf')
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.subTitle}>near station</Text>
        <Text>{`Current location `}</Text>
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
  subTitle: {
    fontFamily: 'silkscreen',
    fontSize: 30,
    textAlign: 'center',
    marginTop: '15%',
  }
});
