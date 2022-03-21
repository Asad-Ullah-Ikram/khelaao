import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import {Authentication} from '../screens/Authentication';
import {GetOTP} from '../screens/GetOTP';

const screenOptions = {
  headerShown: false,
};
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {/* <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={SignUp} /> */}
      <Stack.Screen name="authentication" component={Authentication} />
      <Stack.Screen name="otp" component={GetOTP} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
