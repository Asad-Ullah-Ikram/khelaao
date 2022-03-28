import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainStack from '../navigation/MainStack';
import AuthStack from '../navigation/AuthStack';

const Routes = () => {
  return true ? <MainStack /> : <AuthStack />;
};

export default Routes;

const styles = StyleSheet.create({});
