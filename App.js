import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';
import AuthStack from './src/navigation/AuthStack';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <MainStack />
        {/* <AuthStack /> */}
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
