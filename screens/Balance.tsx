import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {Container} from '../components/shared';
import {colors} from '../components/colors';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigator/RootStack';
import AmountSection from '../components/Balance/AmountSection';
import BalanceCardSection from '../components/Balance/BalanceCardSection';
import ButtonSection from '../components/Balance/ButtonSection';

type Props = StackScreenProps<RootStackParamList, 'Balance'>;

const BalanceContainer = styled(Container)`
  background-color: ${colors.grayLight};
  width: 100%;
  padding: 25px;
  flex: 1;
`;

const Balance: FunctionComponent<Props> = ({route}) => {
  return (
    <BalanceContainer>
      <AmountSection balance={route?.params?.balance} />
      <BalanceCardSection {...route?.params} />
      <ButtonSection />
    </BalanceContainer>
  );
};

export default Balance;
