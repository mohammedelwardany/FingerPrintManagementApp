import * as React from 'react';
import * as Screen from 'react-native-screens'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegistScreen, StartScreen } from '../../screens';


const Stack = createNativeStackNavigator();
const RootNavigation = () => {
    return ( 
        <NavigationContainer>
        <Stack.Navigator initialRouteName="start">
          <Stack.Screen name="start" component={StartScreen} />
          <Stack.Screen name="register" component={RegistScreen} />
        </Stack.Navigator>
      </NavigationContainer>
     );
}
 
export {RootNavigation};