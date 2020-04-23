import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Start ({ navigation }) {
  return (
    <View>
      <Text style={{ marginLeft:20, marginTop:100, fontSize:24 }}>Battle Underground</Text>
      <Button
        title='시작하기'
        onPress={() => navigation.navigate('SelectStation')}
      />
    </View>
  );
}
