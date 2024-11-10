import {Alert, StyleSheet} from 'react-native';
import React, {FunctionComponent} from 'react';
import {SendMoneyProps} from './types';
import styled from 'styled-components/native';
import {ScreenWidth} from '../shared';
import {colors} from '../colors';
import Profile from '../Header/Profile';
import SmallText from '../Texts/SmallText';
import RegularText from '../Texts/RegularText';

const SendMoneyItemContainer = styled.TouchableHighlight`
  height: 130px;
  width: ${ScreenWidth * 0.27}px;
  padding: 10px;
  border-radius: 15px;
  justify-content: space-around;
  margin: 0px 10px 10px 0px;
`;

const SendMoneyItem: FunctionComponent<SendMoneyProps> = props => {
  return (
    <SendMoneyItemContainer
      underlayColor={colors.secondary}
      style={{backgroundColor: props.background}}
      onPress={() => {
        Alert.alert('sendMony');
      }}>
      <>
        <Profile img={props.img} imgStyle={styles.imgContainer} />
        <SmallText textStyles={styles.name}>{props.name}</SmallText>
        <RegularText textStyles={styles.amount}>{props.amount}</RegularText>
      </>
    </SendMoneyItemContainer>
  );
};

export default SendMoneyItem;

const styles = StyleSheet.create({
  imgContainer: {
    marginBottom: 10,
  },
  name: {
    textAlign: 'left',
    color: colors.white,
    fontSize: 12,
  },
  amount: {
    color: colors.white,
    textAlign: 'left',
    fontSize: 13,
  },
});
