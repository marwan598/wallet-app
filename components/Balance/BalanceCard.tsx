import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {colors} from '../colors';
import card_bg from '../../assets/bgs/background_transparent.png';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import {BalanceCardProps} from './types';

const CardBackground = styled.ImageBackground`
  height: 75%;
  width: 100%;
  resized-mode: cover;
  background-color: ${colors.accent};
  border-radius: 25px;
  overflow: hidden;
`;

const TouchableView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  flex: 1;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.Image`
  width: 100%;
  height: 100%;
  flex: 1;
  object-fit: contain;
`;

const BalanceCard: FunctionComponent<BalanceCardProps> = props => {
  return (
    <CardBackground source={card_bg}>
      <TouchableView>
        <CardRow>
          <RegularText textStyles={styles.accountNo}>
            ********{props?.accountNo?.slice(6, 10)}
          </RegularText>
        </CardRow>
        <CardRow>
          <View style={styles.bottomContainer}>
            <SmallText textStyles={styles.balanceTitle}>
              Total Balance
            </SmallText>
            <RegularText textStyles={styles.balance}>
              {props.balance}
            </RegularText>
          </View>
          <Logo source={props.logo} />
        </CardRow>
      </TouchableView>
    </CardBackground>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({
  accountNo: {
    color: colors.white,
  },
  bottomContainer: {flex: 3},
  balanceTitle: {
    marginBottom: 5,
    color: colors.grayLight,
  },
  balance: {
    fontSize: 20,
  },
});
