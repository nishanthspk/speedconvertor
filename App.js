// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Select from './screens/select';
import result from './screens/result';

import { AppRegistry } from 'react-native';

const Stack = createStackNavigator();


const App = () => {
  return (
    

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Speed calculator" component={Select} />

         <Stack.Screen name="Final" component={result} />
        {/* <Stack.Screen name="Result" component={miletokm} /> */}
      </Stack.Navigator>

      </NavigationContainer>
    
  );
}

export default App;