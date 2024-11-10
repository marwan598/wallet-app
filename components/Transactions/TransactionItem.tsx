import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {TransactionProps} from './types';
import {styled} from 'styled-components/native';
import TransactionAvi from './TransactionAvi';
import RegularText from '../Texts/RegularText';
import {colors} from '../colors';
import SmallText from '../Texts/SmallText';

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
`;

const LeftView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  flex: 2;
`;

const RightView = styled.View`
  flex: 1;
`;

const TransactionItem: FunctionComponent<TransactionProps> = props => {
  return (
    <TransactionRow>
      <LeftView>
        <TransactionAvi
          icon={props.art.icon}
          background={props.art.background}
        />
        <View style={styles.transactionTitle}>
          <RegularText textStyles={styles.title}>{props.title}</RegularText>
          <SmallText textStyles={styles.subTitle}>{props.subTitle}</SmallText>
        </View>
      </LeftView>
      <RightView>
        <RegularText textStyles={styles.amount}>{props.amount}</RegularText>
        <SmallText textStyles={styles.date}>{props.date}</SmallText>
      </RightView>
    </TransactionRow>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  transactionTitle: {
    marginLeft: 10,
  },
  title: {
    color: colors.secondary,
    textAlign: 'left',
    marginBottom: 5,
  },
  subTitle: {
    color: colors.grayDark,
    textAlign: 'left',
    marginBottom: 5,
  },
  amount: {
    color: colors.secondary,
    textAlign: 'right',
    marginBottom: 5,
  },
  date: {
    color: colors.grayDark,
    textAlign: 'right',
    marginBottom: 5,
  },
});
