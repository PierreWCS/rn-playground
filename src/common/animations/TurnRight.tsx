import React, {ReactNode, useEffect} from 'react';
import {ViewProps} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

interface FadeInLeftProps extends ViewProps {
  duration?: number;
  delay?: number;
  children: ReactNode;
  onDidAnimate?: () => void;
  fade?: boolean;
  animated?: boolean;
  from?: number;
}

export const FadeInLeft = ({
  children,
  duration,
  delay,
  fade = true,
  animated = true,
  from,
  ...props
}: FadeInLeftProps) => {
  const animatedValue = useSharedValue(0);
  useEffect(() => {
    animatedValue.value = withDelay(
      delay ?? 300,
      withTiming(1, {duration: duration ?? 300}),
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: fade ? animatedValue.value : 1,
    transform: [
      {
        translateX: interpolate(
          animatedValue.value,
          [0, 1],
          [from ? from : -200, 0],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));

  return (
    <Animated.View
      {...props}
      style={[animated ? animatedStyle : {}, props.style]}>
      {children}
    </Animated.View>
  );
};
