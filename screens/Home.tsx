import {StatusBar} from 'react-native';
import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {Container} from '../components/shared';
import {colors} from '../components/colors';
import CardSection from '../components/Cards/CardSection';
import TransactionsSection from '../components/Transactions/TransactionsSection';
import {cardData} from '../data/cardData';
import {transactionData} from '../data/transactionData';

const HomeContainer = styled(Container)`
  background-color: ${colors.grayLight};
  width: 100%;
  flex: 1;
`;
const Home: FunctionComponent = () => {
  return (
    <HomeContainer>
      <StatusBar barStyle="light-content" />
      <CardSection data={cardData} />
      <TransactionsSection data={transactionData} />
    </HomeContainer>
  );
};

export default Home;
