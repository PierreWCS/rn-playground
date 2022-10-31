import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

type Props = {
  action: () => void;
  text: string;
};
const Button = ({action, text}: Props) => (
  <StyledTouchable activeOpacity={0.8} onPress={action}>
    <StyledText>{text}</StyledText>
  </StyledTouchable>
);

export default Button;

const StyledTouchable = styled(TouchableOpacity)`
  background-color: #cce3de;
  padding-vertical: 15px;
  border-radius: 15px;
  padding-horizontal: 20px;
  align-self: center;
`;

const StyledText = styled(Text)`
  color: #6b9080;
`;
