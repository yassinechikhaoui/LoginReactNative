import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WelcomScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import useAuth from './hooks/useAuth';

const Stack = createNativeStackNavigator();

export default function App() {
  const {user} = useAuth();
  if(user){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
         
  
          {/* Ajoutez d'autres écrans ici si nécessaire */}
        </Stack.Navigator>
      </NavigationContainer>
    );

  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
        
          <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomScreen} />
          <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
          <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUpScreen} />
  
          {/* Ajoutez d'autres écrans ici si nécessaire */}
        </Stack.Navigator>
      </NavigationContainer>
    );

  }
 
}
