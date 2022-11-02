import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {RotateRight} from '../common/animations';

import {HomeIcon, SettingsIcon} from '../common/svgs';
import HomeScreen from '../features/home/screens/HomeScreen';
import SettingsScreen from '../features/settings/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const BottomBar = () => {
  const [animateHome, setAnimateHome] = useState<boolean>(false);
  const [animateSettings, setAnimateSettings] = useState<boolean>(false);

  const getIconColorByStatus = (active: boolean): string =>
    active ? '#6B9080' : '#A4C3B2';

  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#6B9080'}}>
      <Tab.Screen
        listeners={{
          tabPress: e => {
            console.log('salut a tous le gamers');
            setAnimateSettings(false);
            setAnimateHome(true);
          },
        }}
        options={{
          tabBarIcon: ({focused}) => (
            <RotateRight
              onAnimationEnd={() => setAnimateHome(false)}
              triggerAnimation={focused && animateHome}>
              <HomeIcon color={getIconColorByStatus(focused)} />
            </RotateRight>
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        listeners={{
          tabPress: e => {
            setAnimateSettings(true);
            setAnimateHome(false);
          },
        }}
        options={{
          tabBarIcon: ({focused}) => (
            <RotateRight
              onAnimationEnd={() => setAnimateSettings(false)}
              triggerAnimation={focused && animateSettings}>
              <SettingsIcon color={getIconColorByStatus(focused)} />
            </RotateRight>
          ),
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomBar;
