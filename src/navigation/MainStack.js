import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Stats from '../screens/Stats';

const Drawer = createDrawerNavigator();

const MainStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Stats" component={Stats} />
    </Drawer.Navigator>
  );
};

export default MainStack;
