import React, {useEffect} from 'react';
import { Text, View, Button } from 'react-native';
import { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, AuthorScreen } from './screens/index';
import { Provider } from 'react-redux';
import configureStore from './redux/store';

const Stack = createStackNavigator();

export default function App() {
const store = configureStore();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#0b132b',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Author" component={AuthorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    </Provider>
  );
}