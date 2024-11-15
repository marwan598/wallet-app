import React, {FunctionComponent} from 'react';
import {TransactionAviProps} from './types';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../colors';

const StyledView = styled.View`
  height: 45px;
  width: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const TransactionAvi: FunctionComponent<TransactionAviProps> = props => {
  return (
    <StyledView style={{backgroundColor: props.background}}>
      <Icon name={props.icon} size={25} color={colors.white} />
    </StyledView>
  );
};

export default TransactionAvi;
