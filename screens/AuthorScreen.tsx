import React from 'react';

import { NavigationScreenProp } from 'react-navigation';
import { Text, View } from 'react-native';
import Wrapper from '../components/Wrapper';
import AuthorProfile from '../components/AuthorProfile';

interface AuthorScreenProps {
  navigation: NavigationScreenProp<any>;
}

function AuthorScreen(Props: AuthorScreenProps) {
  return (
    <Wrapper>
      <AuthorProfile/>
    </Wrapper>
  );
}

export default AuthorScreen;