import {Alert, StyleSheet} from 'react-native';
import React, {FunctionComponent, useRef} from 'react';
import {SendMoneySectionProps} from './types';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import styled from 'styled-components/native';
import {colors} from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import SendMoneyItem from './SendMoneyItem';

const SendMoneySectionBackground = styled.View`
  width: 100%;
  padding-top: 15px;
  background-color: ${colors.white};
`;

const SendMoneyRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-horizontal: 25px;
`;

const SendMoneyList = styled.FlatList`
  width: 100%;
  flex: auto;
  min-height: 80%;
  padding-horizontal: 25px;
`;

const TextButton = styled.TouchableOpacity``;

const SendMoneySection: FunctionComponent<SendMoneySectionProps> = props => {
  const sheetRef = useRef<BottomSheet>(null);

  return (
    <BottomSheet ref={sheetRef} snapPoints={[240, 85]}>
      <BottomSheetView>
        <SendMoneySectionBackground>
          <SendMoneyRow style={styles.titleContainer}>
            <RegularText textStyles={styles.title}>Send Money To</RegularText>
            <TextButton onPress={() => Alert.alert('a')}>
              <SmallText textStyles={styles.btnText}>+Add</SmallText>
            </TextButton>
          </SendMoneyRow>

          <SendMoneyList
            data={props.data}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            keyExtractor={({id}: any) => id.toString()}
            renderItem={({item}: any) => <SendMoneyItem {...item} />}
          />
        </SendMoneySectionBackground>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default SendMoneySection;

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 25,
  },
  title: {
    fontSize: 19,
    color: colors.secondary,
  },
  btnText: {
    fontWeight: 'bold',
    color: colors.tertiary,
  },
  listContainer: {
    alignItems: 'flex-start',
  },
});
