import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeIcon, SettingsIcon} from '../common/svgs';
import HomeScreen from '../features/home/screens/HomeScreen';
import SettingsScreen from '../features/settings/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const BottomBar = () => {
  const getIconColorByStatus = (active: boolean): string => {
    if (active) {
      return '#6B9080';
    } else {
      return '#A4C3B2';
    }
  };

  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#6B9080'}}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon color={getIconColorByStatus(focused)} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <SettingsIcon color={getIconColorByStatus(focused)} />
          ),
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomBar;
