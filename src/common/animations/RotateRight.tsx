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

interface RotateRightProps extends ViewProps {
  children: ReactNode;
  triggerAnimation?: boolean;
  onAnimationEnd?: () => void;
}

export const RotateRight = ({
  children,
  triggerAnimation,
  onAnimationEnd,
  ...props
}: RotateRightProps) => {
  const animatedValue = useSharedValue(0);

  const animate = () => {
    animatedValue.value = withTiming(1, {duration: 300}, () => {
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
    const rotation = interpolate(
      animatedValue.value,
      [0, 1],
      [0, animatedValue.value + 180],
      Extrapolate.CLAMP,
    );

    return {transform: [{rotateZ: `${rotation}deg`}]};
  });

  return (
    <Animated.View {...props} style={[animatedStyle, props.style]}>
      {children}
    </Animated.View>
  );
};
