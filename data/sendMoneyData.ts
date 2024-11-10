import {colors} from '../components/colors';
import {SendMoneyProps} from '../components/SendMoney/types';
import portrait1 from '../assets/portraits/1.jpg';
import portrait2 from '../assets/portraits/2.jpg';
import portrait3 from '../assets/portraits/3.jpg';

export const sendMoneyData: SendMoneyProps[] = [
  {
    id: 1,
    amount: '2450.56',
    name: 'Coby Andoh',
    background: colors.tertiary,
    img: portrait1,
  },
  {
    id: 2,
    amount: '4450.56',
    name: 'Harleen Scot',
    background: colors.primary,
    img: portrait2,
  },
  {
    id: 3,
    amount: '6250.56',
    name: 'James Corbyn',
    background: colors.accent,
    img: portrait3,
  },
];
