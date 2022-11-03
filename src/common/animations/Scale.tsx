import React, {ReactNode, useEffect} from 'react';
import {ViewProps} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface Props extends ViewProps {
  children: ReactNode;
  triggerAnimation?: boolean;
  onAnimationEnd?: () => void;
}
const Scale = ({
  children,
  onAnimationEnd,
  triggerAnimation,
  ...props
}: Props) => {
  const animatedValue = useSharedValue(0);

  const animate = () => {
    animatedValue.value = withTiming(1, {duration: 600}, () => {
      animatedValue.value = 0;
      onAnimationEnd && runOnJS(onAnimationEnd)();
    });
  };

  useEffect(() => {
    if (triggerAnimation) {
      animate();
    }
  }, [triggerAnimation]);

  const animatedStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(
      animatedValue.value,
      [0, 0.5, 1],
      [1, animatedValue.value + 0.5, 1],
      Extrapolate.CLAMP,
    );

    return {transform: [{scale: scaleValue}]};
  });

  return (
    <Animated.View {...props} style={[animatedStyle, props.style]}>
      {children}
    </Animated.View>
  );
};

export default Scale;
