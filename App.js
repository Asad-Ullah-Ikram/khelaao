import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/navigation/Routes';
import {Provider as PaperProvider} from 'react-native-paper';
import MainStack from './src/navigation/MainStack';

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        {/* <MainStack /> */}
        {/* <AuthStack /> */}
        <Routes />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
