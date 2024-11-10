import {StatusBar} from 'react-native';
import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {Container} from '../components/shared';
import {colors} from '../components/colors';

const HomeContainer = styled(Container)`
  background-color: ${colors.grayLight};
  width: 100%;
  flex: 1;
`;
const Home: FunctionComponent = () => {
  return (
    <HomeContainer>
      <StatusBar barStyle="dark-content" />
    </HomeContainer>
  );
};

export default Home;
