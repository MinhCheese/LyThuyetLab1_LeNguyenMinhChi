import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Part1 from './screens/Part1';
import Part2 from './screens/Part2';
import Part3 from './screens/Part3';
import Part4 from './screens/Part4';
import Part5 from './screens/Part5';
import Part6 from './screens/Part6';
import Part7 from './screens/Part7';
import Part8 from './screens/Part8';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Part1" component={Part1} />
        <Stack.Screen name='Part2' component={Part2}/>
        <Stack.Screen name='Part3' component={Part3}/>
        <Stack.Screen name='Part4' component={Part4}/>
        <Stack.Screen name='Part5' component={Part5}/>
        <Stack.Screen name='Part6' component={Part6}/>
        <Stack.Screen name='Part7' component={Part7}/>
        <Stack.Screen name='Part8' component={Part8}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
