// src/navigation/AppNavigator.tsx
import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { SubjectScreen } from '../screens/SubjectScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { IRootStackParamList } from '../interfaces/common';

const Stack = createNativeStackNavigator<IRootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SubjectScreen"
        component={SubjectScreen}
        options={({ route }) => {
          console.log(route);
          return { title: `${route.params.name}` };
        }}
      />
    </Stack.Navigator>
  );
}
