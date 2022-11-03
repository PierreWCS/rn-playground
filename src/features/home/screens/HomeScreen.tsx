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

      <View style={{height: 50}} />
      <View
        style={{
          width: 200,
          height: 200,
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <SimpleAnimation
          size={24}
          triggerAnimation={stroke}
          onAnimationEnd={() => setStroke(false)}
        />
        <View style={{height: 20}} />
        <Button action={() => setStroke(true)} text="Fill this" />
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
