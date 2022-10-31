import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import BottomBar from './BottomBar';

const Stack = createNativeStackNavigator();

const Stacks = () => (
  <NavigationContainer>
    <BottomBar />
  </NavigationContainer>
);

export default Stacks;
