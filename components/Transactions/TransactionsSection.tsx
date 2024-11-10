import {StyleSheet} from 'react-native';
import React, {FunctionComponent} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {TransactionSectionProps} from './types';
import styled from 'styled-components/native';
import RegularText from '../Texts/RegularText';
import {colors} from '../colors';
import SmallText from '../Texts/SmallText';
import TransactionItem from './TransactionItem';

const TransactionSectionBackground = styled.View`
  width: 100%;
  padding-horizontal: 25px;
  padding-top: 5px;
  flex: 2;
`;

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TransactionList = styled.FlatList`
  width: 100%;
`;

const TransactionsSection: FunctionComponent<
  TransactionSectionProps
> = props => {
  return (
    <TransactionSectionBackground>
      <TransactionRow style={styles.transactionHeader}>
        <RegularText textStyles={styles.headerTile}>Transactions</RegularText>
        <SmallText textStyles={styles.headerSubTile}>Recent</SmallText>
        <Icon name="caret-down" size={13} color={colors.grayDark} />
      </TransactionRow>
      <TransactionList
        data={props.data}
        showsVerticalScrollIndicator={false}
        keyExtractor={({id}: any) => id.toString()}
        renderItem={({item}: any) => <TransactionItem {...item} />}
      />
    </TransactionSectionBackground>
  );
};

export default TransactionsSection;

const styles = StyleSheet.create({
  transactionHeader: {
    marginBottom: 25,
  },
  headerTile: {
    fontSize: 19,
    color: colors.secondary,
  },
  headerSubTile: {
    color: colors.secondary,
  },
  listContainer: {
    paddingBottom: 25,
  },
});
