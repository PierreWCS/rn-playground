import React, {useEffect} from 'react';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import Svg, {Rect} from 'react-native-svg';
import {Button} from '../../theme';

const AnimatedSquare = Animated.createAnimatedComponent(Rect);

type Props = {
  children?: JSX.Element[];
  stroke: number;
  triggerAnimation: () => void;
};
const SimpleAnimation = () => {
  const animatedValue = useSharedValue(0);

  const animateTo = () => {
    console.log('salut bro');
    animatedValue.value = withTiming(300, {
      // duration: 2000,
      // easing: Easing.ease,
    });
  };

  const circleAnimatedProps = useAnimatedProps(() => {
    return {
      strokeWidth: interpolate(animatedValue.value, [0, 100], [-1, 0]),
      // stroke: interpolateColor(animatedValue.value, inputRange, outputRange),
    };
  });

  return (
    <>
      <Svg style={{backgroundColor: 'pink'}}>
        <AnimatedSquare
          fill={'transparent'}
          stroke={'orange'}
          strokeLinecap={'round'}
          animatedProps={circleAnimatedProps}
        />
      </Svg>
      <Button action={animateTo} text="Fill this" />
    </>
  );
};

export default SimpleAnimation;
