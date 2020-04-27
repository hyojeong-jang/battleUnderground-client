import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

export default function GameRoomScreen ({ navigation }) {
  const [ errorMsg, setErrorMsg ] = useState(null);

  const dispatch = useDispatch();

  const [fontsLoaded] = useFonts({
    'silkscreen': require('../assets/fonts/silkscreen.ttf')
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
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
});
