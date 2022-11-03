import React from 'react';
import {Text} from 'react-native';
import {ScreenWrapper} from '../../../theme';

type Props = {navigation: any};
const SettingsScreen = ({navigation}: Props) => (
  <ScreenWrapper>
    <Text style={{fontSize: 24, textAlign: 'center'}}>Settings screen</Text>
  </ScreenWrapper>
);

export default SettingsScreen;
