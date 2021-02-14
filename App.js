import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/screens/Home'
import RestaurantShow from './src/screens/RestaurantShow'

const Stack = createStackNavigator();

export default function App() {
  return (<NavigationContainer>
    <Stack.Navigator initialRouteName='home'>
      <Stack.Screen name="home" component={Home}/>
      <Stack.Screen name='details' component={RestaurantShow}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
