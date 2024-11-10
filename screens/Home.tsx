import {StatusBar} from 'react-native';
import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {Container} from '../components/shared';
import {colors} from '../components/colors';
import mc from '../assets/cards/mc.png';
import visa from '../assets/cards/visa_white.png';
import {CardProps} from '../components/Cards/types';
import CardSection from '../components/Cards/CardSection';

const HomeContainer = styled(Container)`
  background-color: ${colors.grayLight};
  width: 100%;
  flex: 1;
`;
const Home: FunctionComponent = () => {
  const cardData: CardProps[] = [
    {
      id: 1,
      accountNo: '3845757744',
      balance: 20000.15,
      alias: 'Work Debit',
      logo: mc,
    },
    {
      id: 2,
      accountNo: '38457538837',
      balance: 12000.05,
      alias: 'Personal Prepaid',
      logo: visa,
    },
    {
      id: 3,
      accountNo: '3872980088',
      balance: 5790.83,
      alias: 'School Prepaid',
      logo: mc,
    },
  ];

  return (
    <HomeContainer>
      <StatusBar barStyle="light-content" />
      <CardSection data={cardData} />
    </HomeContainer>
  );
};

export default Home;
