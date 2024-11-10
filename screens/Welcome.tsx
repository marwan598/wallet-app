import React, {FunctionComponent} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Container} from '../components/shared';
import {colors} from '../components/colors';
import background from '../assets/bgs/background_v1.png';
import BigText from '../components/Texts/BigText';
import SmallText from '../components/Texts/SmallText';
import RegularButton from '../components/Buttons/RegularButton';

// custom Components

const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;
const BottomSection = styled.View`
  width: 100%;
  flex: 1;
  padding: 25px;
  justify-content: flex-end;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;

const Welcome: FunctionComponent = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <BigText textStyles={styles.title}>
            Best way to track your money
          </BigText>
          <SmallText textStyles={styles.title}>
            Best payment method , connects money to your friends
          </SmallText>
          <RegularButton onPress={() => {}}>Get Started</RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

const styles = StyleSheet.create({
  title: {width: '70%', marginBottom: 25},
});

export default Welcome;
