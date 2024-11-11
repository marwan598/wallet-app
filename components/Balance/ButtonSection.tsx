import {StyleSheet} from 'react-native';
import React, {FunctionComponent} from 'react';
import RegularButton from '../Buttons/RegularButton';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import {colors} from '../colors';

const ButtonSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
`;

const ButtonSection: FunctionComponent = () => {
  return (
    <ButtonSectionBackground>
      <RegularButton onPress={() => {}} btnStyles={styles.btnStyle}>
        Cancel <Icon name="card" size={17} color={colors.white} />
      </RegularButton>
    </ButtonSectionBackground>
  );
};

export default ButtonSection;

const styles = StyleSheet.create({
  btnStyle: {
    width: '50%',
  },
});
