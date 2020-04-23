import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { View, Text, Button } from 'react-native';


export default function Root () {
  return (
    <View>
      <Text style={{ marginLeft:20, marginTop:100, fontSize:24 }}>자철게임</Text>
      <Button
        title='시작하기'
        onPress={() => console.log('press')}
      />
    </View>
  );
}
