import {colors} from '../components/colors';
import {TransactionProps} from '../components/Transactions/types';

export const transactionData: TransactionProps[] = [
  {
    id: 1,
    amount: '-$86.00',
    title: 'Taxi',
    subTitle: 'Uber',
    art: {
      background: colors.primary,
      icon: 'car',
    },
    date: '14 Sep 2024',
  },
  {
    id: 2,
    amount: '-$286.00',
    title: 'Shopping',
    subTitle: 'Amazon',
    art: {
      background: colors.tertiary,
      icon: 'cart',
    },
    date: '14 Sep 2024',
  },
  {
    id: 3,
    amount: '-$586.00',
    title: 'Travel',
    subTitle: 'Egypt Air',
    art: {
      background: colors.accent,
      icon: 'car',
    },
    date: '14 Aug 2024',
  },
];
