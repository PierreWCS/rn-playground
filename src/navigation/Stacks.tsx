import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import HomeScreen from '../features/home/screens/HomeScreen';
import SettingsScreen from '../features/settings/screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const Stacks = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Stacks;
