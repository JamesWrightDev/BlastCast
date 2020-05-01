import React from 'react';

import { NavigationScreenProp } from 'react-navigation';
import { Text, View, Button } from 'react-native';

interface AuthorScreenProps {
  navigation: NavigationScreenProp<any>;
}

function AuthorScreen(Props: AuthorScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

export default AuthorScreen;