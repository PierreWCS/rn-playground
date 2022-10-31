import React from 'react';
import {Text} from 'react-native';
import {Button, ScreenWrapper} from '../../../theme';

type Props = {navigation: any};
const SettingsScreen = ({navigation}: Props) => {
  return (
    <ScreenWrapper>
      <Text>Settings screen</Text>
      <Button
        text="Go to home screen"
        action={() => navigation.navigate('Home')}
      />
    </ScreenWrapper>
  );
};

export default SettingsScreen;
