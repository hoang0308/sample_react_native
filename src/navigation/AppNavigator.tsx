// src/navigation/AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SubjectScreen } from '../screens/SubjectScreen';
import { HomeScreen } from '../screens/HomeScreen';

export type RootStackParamList = {
  Home: undefined;
  SubjectScreen: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SubjectScreen"
        component={SubjectScreen}
        options={({ route }) => {
          console.log(route);
          return { title: `Detail ${route.params.id}` };
        }}
      />
    </Stack.Navigator>
  );
}
