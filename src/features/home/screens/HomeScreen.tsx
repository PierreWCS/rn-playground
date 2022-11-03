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
      <Text style={{fontSize: 24, textAlign: 'center'}}>Home screen</Text>
      <View style={{height: 20}} />

      <View style={{alignItems: 'center'}}>
        <RotateRight
          onAnimationEnd={() => setShouldAnimate(false)}
          triggerAnimation={shouldAnimate}>
          <View
            style={{
              backgroundColor: 'pink',
              height: 50,
              width: 50,
              borderRadius: 10,
            }}
          />
        </RotateRight>
      </View>

      <View style={{height: 20}} />
      <Button
        action={() => {
          setShouldAnimate(true);
        }}
        text="flip this"
      />
    </ScreenWrapper>
  );
};

export default HomeScreen;
