import React, {FunctionComponent} from 'react';
import {BalanceCardProps} from './types';
import styled from 'styled-components/native';
import BalanceCard from './BalanceCard';

const BalanceCardSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 2;
`;

const BalanceCardSection: FunctionComponent<BalanceCardProps> = props => {
  return (
    <BalanceCardSectionBackground>
      <BalanceCard {...props} />
    </BalanceCardSectionBackground>
  );
};

export default BalanceCardSection;
