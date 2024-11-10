import React, {FunctionComponent} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import {colors} from '../components/colors';
import Greeting from '../components/Header/Greeting';
import Profile from '../components/Header/Profile';
import Avi from '../assets/avi/avatar.png';
import {StyleSheet} from 'react-native';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const RootStack: FunctionComponent = () => {
  const renderGreeting = (props: any) => (
    <Greeting mainText="Hey Moro!" subText="Welcome Back!" {...props} />
  );

  const renderProfile = () => (
    <Profile img={Avi} imgContainerStyle={styles.imgContainerStyle} />
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
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
