import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styled from 'styled-components';

type Props = {
  children: JSX.Element[];
};
const ScreenWrapper = ({children}: Props) => (
  <StyledSafeArea>
    <StyledView>{children}</StyledView>
  </StyledSafeArea>
);

export default ScreenWrapper;

const StyledSafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const StyledView = styled(View)`
  flex: 1;
`;
