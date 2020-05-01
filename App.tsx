import React from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";
import Wrapper from './components/Wrapper';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen() {
  return (
    <Wrapper>
      <Text>Home Screen</Text>
    </Wrapper>
  );
}


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Text>Open up App.tsx to start working on your app!</Text>
      </Wrapper>
    </ThemeProvider>
  );
}