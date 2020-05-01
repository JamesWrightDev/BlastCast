import React from 'react';

import { NavigationScreenProp } from 'react-navigation';
import Wrapper from '../components/Wrapper';
import { Text, View, Button } from 'react-native';

interface HomeScreenProps {
  navigation: NavigationScreenProp<any>;
}

const HomeScreen = (Props: HomeScreenProps) => {
  return (
    <Wrapper>
      <Text>Home Screen</Text>
      <Button
        title="Go to Author"
        onPress={() => Props.navigation.navigate('Author')}
      />
    </Wrapper>
  )
}

export default HomeScreen;