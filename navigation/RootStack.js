import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import StartScreen from '../components/Start';
import SelectStationScreen from '../containers/SelectStationScreen';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen name='Start' component={StartScreen} />
        <Stack.Screen name='SelectStation' component={SelectStationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

