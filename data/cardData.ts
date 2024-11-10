import mc from '../assets/cards/mc.png';
import visa from '../assets/cards/visa_white.png';
import {CardProps} from '../components/Cards/types';

export const cardData: CardProps[] = [
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
