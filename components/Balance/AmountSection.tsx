import {StyleSheet} from 'react-native';
import React, {FunctionComponent} from 'react';
import {AmountProps} from './types';
import styled from 'styled-components/native';
import SmallText from '../Texts/SmallText';
import {colors} from '../colors';
import RegularText from '../Texts/RegularText';

const AmountSectionBackground = styled.View`
  width: 100%;
  padding-top: 5px;
  align-items: center;
  flex: 1;
`;

const AmountSection: FunctionComponent<AmountProps> = props => {
  return (
    <AmountSectionBackground>
      <SmallText textStyles={styles.totalBalance}>Total Balance</SmallText>
      <RegularText textStyles={styles.balance}>$ {props.balance}</RegularText>
    </AmountSectionBackground>
  );
};

export default AmountSection;

const styles = StyleSheet.create({
  totalBalance: {
    color: colors.secondary,
    marginBottom: 15,
  },
  balance: {
    color: colors.secondary,
    fontSize: 28,
  },
});
