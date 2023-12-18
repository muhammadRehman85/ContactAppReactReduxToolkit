import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Users from '../screen/Users';
import AddUsers from '../screen/AddUsers';
import { NavigationContainer } from '@react-navigation/native';
const Stack=createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Users" component={Users}  />
    <Stack.Screen name="AddUsers" component={AddUsers} />
    
  </Stack.Navigator></NavigationContainer>
  )
}

export default AppNavigator