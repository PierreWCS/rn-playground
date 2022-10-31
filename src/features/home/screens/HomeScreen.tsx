import React from 'react';
import {Text} from 'react-native';
import {Button, ScreenWrapper} from '../../../theme';

type Props = {
  navigation: any;
};
const HomeScreen = ({navigation}: Props) => {
  return (
    <ScreenWrapper>
      <Text>Home screen</Text>
      <Button
        action={() => navigation.navigate('Settings')}
        text="Go to settings"
      />
    </ScreenWrapper>
  );
};

export default HomeScreen;
