import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../containers/HomeScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator () {
  return (
    <Tab.Navigator>
      <Tab.Screen name='home' component={HomeScreen} />
    </Tab.Navigator>
  );
}
