import React, {useEffect} from 'react';
import {View} from 'react-native';
import Animated, {
  Easing,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import styled from 'styled-components';

type Props = {
  onAnimationEnd?: () => void;
  triggerAnimation?: boolean;
  size?: number;
};
const SimpleAnimation = ({triggerAnimation, size = 24}: Props) => {
  const animatedValue1 = useSharedValue(0);
  const animatedValue2 = useSharedValue(0);
  const animatedValue3 = useSharedValue(0);
  const animatedValue4 = useSharedValue(0);

  useEffect(() => {
    if (triggerAnimation) {
      animate();
    } else {
      animatedValue1.value = 0;
      animatedValue2.value = 0;
      animatedValue3.value = 0;
      animatedValue4.value = 0;
    }
  }, [triggerAnimation]);

  const animate = () => {
    animatedValue1.value = 0;
    animatedValue1.value = withDelay(
      0,
      withTiming(1, {duration: 200, easing: Easing.ease}),
    );

    animatedValue2.value = 0;
    animatedValue2.value = withDelay(
      0,
      withTiming(1, {duration: 200, easing: Easing.ease}),
    );

    animatedValue3.value = 0;
    animatedValue3.value = withDelay(
      100,
      withTiming(1, {duration: 200, easing: Easing.ease}),
    );

    animatedValue4.value = 0;
    animatedValue4.value = withDelay(
      100,
      withTiming(1, {duration: 200, easing: Easing.ease}),
    );
  };

  const RATIO = size / 120;
  const tilesBorderRadius = 10 * RATIO;
  const tileSize = 50 * RATIO;

  const circleAnimatedProps1 = useAnimatedStyle(() => ({
    top: interpolate(animatedValue1.value, [0, 1], [tileSize - 1, 0]),
  }));
  // -1 for border width
  const circleAnimatedProps2 = useAnimatedStyle(() => ({
    top: interpolate(animatedValue2.value, [0, 1], [tileSize - 1, 0]),
  }));
  const circleAnimatedProps3 = useAnimatedStyle(() => ({
    top: interpolate(animatedValue3.value, [0, 1], [tileSize - 1, 0]),
  }));
  const circleAnimatedProps4 = useAnimatedStyle(() => ({
    top: interpolate(animatedValue4.value, [0, 1], [tileSize - 1, 0]),
  }));

  type SquareProps = {children: JSX.Element};
  const MySquare = ({children}: SquareProps) => (
    <TileContainer tileSize={tileSize} tilesBorderRadius={tilesBorderRadius}>
      {children}
    </TileContainer>
  );

  return (
    <View
      style={{
        width: size,
        height: size,
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <MySquare>
          <Animated.View
            key={`tile_n°0`}
            style={[
              circleAnimatedProps1,
              {backgroundColor: '#6B9080', width: tileSize, height: tileSize},
            ]}
          />
        </MySquare>
        <MySquare>
          <Animated.View
            key={`tile_n°0`}
            style={[
              circleAnimatedProps2,
              {backgroundColor: '#6B9080', width: tileSize, height: tileSize},
            ]}
          />
        </MySquare>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <MySquare>
          <Animated.View
            key={`tile_n°0`}
            style={[
              circleAnimatedProps3,
              {backgroundColor: '#6B9080', width: tileSize, height: tileSize},
            ]}
          />
        </MySquare>
        <MySquare>
          <Animated.View
            key={`tile_n°0`}
            style={[
              circleAnimatedProps4,
              {backgroundColor: '#6B9080', width: tileSize, height: tileSize},
            ]}
          />
        </MySquare>
      </View>
    </View>
  );
};

export default SimpleAnimation;

const TileContainer = styled(View)<{
  tileSize: number;
  tilesBorderRadius: number;
}>`
  border-color: grey;
  border-width: 1px;
  height: ${({tileSize}) => tileSize}px;
  width: ${({tileSize}) => tileSize}px;
  overflow: hidden;
  border-radius: ${({tilesBorderRadius}) => tilesBorderRadius}px;
`;
