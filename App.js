// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from "./screens/index.js"
import Select from './screens/select.js';
import Selectw from "./screens/selectw.js"
import Final from './screens/result.js';
import Finalw from "./screens/resultw.js"
import { AppRegistry } from 'react-native';




const Stack = createStackNavigator();


const App = () => { 
  return (
    

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"> 
          <Stack.Screen name="Home" component={Main} />
          <Stack.Screen name="Speed calculator" component={Select} />
          <Stack.Screen name="Weight calculator" component={Selectw} />
          <Stack.Screen name="final" component={Final} />
          <Stack.Screen name="finalw" component={Finalw} />
        </Stack.Navigator>

      </NavigationContainer>
      
    
  );
}
AppRegistry.registerComponent('App', () => App);
export default App;