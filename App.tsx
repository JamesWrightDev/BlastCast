import React from 'react';
import { Text, View, Button } from 'react-native';
import { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, AuthorScreen } from './screens/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Author" component={AuthorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}