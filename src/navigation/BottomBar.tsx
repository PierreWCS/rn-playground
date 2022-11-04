import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {RotateRight, Scale} from '../common/animations';
import SimpleAnimation from '../common/animations/SimpleAnimation';

import {DashboardIcon, HomeIcon, SettingsIcon} from '../common/svgs';
import Dashboard from '../features/dashboard/screens/Dashboard';
import HomeScreen from '../features/home/screens/HomeScreen';
import SettingsScreen from '../features/settings/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const BottomBar = () => {
  const [animateDashboard, setAnimateDashboard] = useState<boolean>(true);
  const [animateHome, setAnimateHome] = useState<boolean>(false);
  const [animateSettings, setAnimateSettings] = useState<boolean>(false);

  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#6B9080'}}>
      <Tab.Screen
        listeners={{
          tabPress: () => setAnimateDashboard(true),
          blur: () => setAnimateDashboard(false),
        }}
        options={{
          tabBarIcon: ({focused}) => (
            <SimpleAnimation
              triggerAnimation={focused && animateDashboard}
              size={24}
            />
          ),
        }}
        name="Dashboard"
        component={Dashboard}
      />

      <Tab.Screen
        listeners={{
          tabPress: () => setAnimateHome(true),
          blur: () => setAnimateHome(false),
        }}
        options={{
          tabBarIcon: ({focused}) => (
            <Scale triggerAnimation={focused && animateHome}>
              <HomeIcon filled={focused} color={'#6B9080'} />
            </Scale>
          ),
        }}
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        listeners={{
          tabPress: () => setAnimateSettings(true),
          blur: () => setAnimateSettings(false),
        }}
        options={{
          tabBarIcon: ({focused}) => (
            <RotateRight triggerAnimation={focused && animateSettings}>
              <SettingsIcon color={'#6B9080'} filled={focused} />
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
