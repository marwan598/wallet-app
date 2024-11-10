import {StyleProp, TextStyle, StyleSheet} from 'react-native';
import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import RegularText from '../Texts/RegularText';
import {colors} from '../colors';
import SmallText from '../Texts/SmallText';

export interface GreetingProps {
  mainText: string;
  subText: string;
  mainTextStyles?: StyleProp<TextStyle>;
  subTextStyles?: StyleProp<TextStyle>;
}

const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const Greeting: FunctionComponent<GreetingProps> = props => {
  return (
    <StyledView>
      <RegularText textStyles={[styles.mainText, props.mainTextStyles]}>
        {props.mainText}
      </RegularText>
      <SmallText textStyles={[styles.subText, props.subTextStyles]}>
        {props.subText}
      </SmallText>
    </StyledView>
  );
};
const styles = StyleSheet.create({
  mainText: {color: colors.secondary, fontSize: 22},
  subText: {color: colors.grayDark},
});
export default Greeting;
