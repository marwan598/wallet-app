import {StyleSheet} from 'react-native';
import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {CardSectionProps} from './types';
import CardItem from './CardItem';

const CardList = styled.FlatList`
  width: 100%;
  flex: 1;
  padding-left: 25px;
  padding-bottom: 15px;
`;

const CardSection: FunctionComponent<CardSectionProps> = props => {
  return (
    <CardList
      data={props.data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={({id}: any) => id.toString()}
      contentContainerStyle={styles.contentContainer}
      renderItem={({item}: any) => <CardItem {...item} />}
    />
  );
};

export default CardSection;

const styles = StyleSheet.create({
  contentContainer: {
    paddingRight: 25,
    alignItems: 'center',
  },
});
