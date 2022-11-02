import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {RotateRight} from '../../../common/animations';
import SimpleAnimation from '../../../common/animations/SimpleAnimation';
import {Button, ScreenWrapper} from '../../../theme';

type Props = {
  navigation: any;
};
const HomeScreen = ({navigation}: Props) => {
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);

  const [stroke, setStroke] = useState<boolean>(false);

  return (
    <ScreenWrapper>
      <Text>Home screen</Text>
      <Button
        action={() => navigation.navigate('Settings')}
        text="Go to settings"
      />
      <View
        style={{
          backgroundColor: 'orange',
          height: 200,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <RotateRight
          onAnimationEnd={() => setShouldAnimate(false)}
          triggerAnimation={shouldAnimate}>
          <View style={{backgroundColor: 'pink', height: 50, width: 50}} />
        </RotateRight>
      </View>

      <Button
        action={() => {
          setShouldAnimate(true);
        }}
        text="flip this"
      />

      <View style={{height: 50}} />
      <View style={{width: 200, height: 200, alignSelf: 'center'}}>
        <SimpleAnimation />
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
