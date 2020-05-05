import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import StartScreen from '../containers/StartScreen';
import SelectStationScreen from '../containers/SelectStationScreen';
import SelectTrainScreen from '../containers/SelectTrainScreen';
import HomeScreen from '../containers/HomeScreen';
import GameRoomScreen from '../containers/GameRoomScreen';
import GameResultScreen from '../containers/GameResultScreen';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName='Start'>
        <Stack.Screen name='Start' component={StartScreen} />
        <Stack.Screen name='SelectStation' component={SelectStationScreen} />
        <Stack.Screen name='SelectTrain' component={SelectTrainScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='GameRoom' component={GameRoomScreen} />
        <Stack.Screen name='GameResult' component={GameResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

