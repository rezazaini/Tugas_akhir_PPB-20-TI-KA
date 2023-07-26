import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import MenuScreen from './component/MenuScreen';
import ProductDua from './component/ProductDua';
import ProductSatu from './component/ProductSatu';
import ProductTiga from './component/ProductTiga';
import HikSatu from './component/HikSatu';
import HikDua from './component/HikDua';
import HikTiga from './component/HikTiga';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown : false }}/>
        <Stack.Screen name="ProductDua" component={ProductDua} options={{ headerShown : false }}/>
        <Stack.Screen name="ProductSatu" component={ProductSatu} options={{ headerShown : false }}/>
        <Stack.Screen name="ProductTiga" component={ProductTiga} options={{ headerShown : false }}/>
        <Stack.Screen name="ProductEmpat" component={ProductSatu} options={{ headerShown : false }}/>
        <Stack.Screen name="HikSatu" component={HikSatu} />
        <Stack.Screen name="HikDua" component={HikDua} />
        <Stack.Screen name="HikTiga" component={HikTiga} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
