import React, {FunctionComponent} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import {colors} from '../components/colors';
import Greeting from '../components/Header/Greeting';
import Profile from '../components/Header/Profile';
import Avi from '../assets/avi/avatar.png';
import {StyleSheet} from 'react-native';
import {CardProps} from '../components/Cards/types';
import Balance from '../screens/Balance';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Balance: CardProps;
};

const Stack = createStackNavigator<RootStackParamList>();
const renderGreeting = (props: any) => (
  <Greeting mainText="Hey Moro!" subText="Welcome Back!" {...props} />
);

const renderProfile = () => (
  <Profile img={Avi} imgContainerStyle={styles.imgContainerStyle} />
);

const headerBackImage = (props: any) => (
  <Icon {...props} name="chevron-back" size={25} color={colors.secondary} />
);

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Balance"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.grayLight,
            borderBottomWidth: 0,
            shadowColor: 'transparent',
            shadowOpacity: 0,
            elevation: 0,
            height: 120,
          },
          headerTintColor: colors.secondary,
          headerRight: renderProfile,
          headerRightContainerStyle: {
            paddingRight: 25,
          },
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
        }}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: renderGreeting,
            headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name="Balance"
          component={Balance}
          options={({route}) => ({
            headerTitle: route?.params?.alias,
            headerTitleAlign: 'center',
            headerBackImage: headerBackImage,
            headerLeftContainerStyle: {paddingLeft: 0},
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  imgContainerStyle: {
    backgroundColor: colors.tertiary,
  },
});

export default RootStack;
