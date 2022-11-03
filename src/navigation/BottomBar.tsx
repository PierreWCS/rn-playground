import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {RotateRight} from '../common/animations';
import SimpleAnimation from '../common/animations/SimpleAnimation';

import {DashboardIcon, HomeIcon, SettingsIcon} from '../common/svgs';
import Dashboard from '../features/dashboard/screens/Dashboard';
import HomeScreen from '../features/home/screens/HomeScreen';
import SettingsScreen from '../features/settings/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const BottomBar = () => {
  const [animateDashboard, setAnimateDashboard] = useState<boolean>(false);
  const [animateSettings, setAnimateSettings] = useState<boolean>(false);

  const getIconColorByStatus = (active: boolean): string =>
    active ? '#6B9080' : '#A4C3B2';

  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#6B9080'}}>
      <Tab.Screen
        listeners={{
          tabPress: e => {
            setAnimateSettings(false);
            setAnimateDashboard(true);
          },
          blur: e => {
            setAnimateDashboard(false);
          },
        }}
        options={{
          tabBarIcon: ({focused}) => (
            <SimpleAnimation
              triggerAnimation={animateDashboard}
              size={24}
              onAnimationEnd={() => setAnimateDashboard(false)}
            />
          ),
        }}
        name="Dashboard"
        component={Dashboard}
      />

      <Tab.Screen
        listeners={
          {
            // tabPress: e => {
            //   setAnimateSettings(false);
            //   setAnimateDashboard(true);
            // },
            // blur: e => {
            //   setAnimateDashboard(false);
            // },
          }
        }
        options={{
          tabBarIcon: ({focused}) => (
            <RotateRight
              onAnimationEnd={() => setAnimateSettings(false)}
              triggerAnimation={focused && animateSettings}>
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
            setAnimateDashboard(false);
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
