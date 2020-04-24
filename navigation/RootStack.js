import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import StartScreen from '../containers/StartScreen';
import SelectStationScreen from '../containers/SelectStationScreen';
import SelectTrainScreen from '../containers/SelectTrainScreen';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName='Start'>
        <Stack.Screen name='Start' component={StartScreen} />
        <Stack.Screen name='SelectStation' component={SelectStationScreen} />
        <Stack.Screen name='SelectTrain' component={SelectTrainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

