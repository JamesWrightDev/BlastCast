import React, { useEffect, useState } from "react";
import { NavigationScreenProp } from "react-navigation";
import { Text, View } from "react-native";
import Wrapper from "../components/Wrapper";


interface PlayerScreenProps {
  navigation: NavigationScreenProp<any>;
}

function PlayerScreen(Props: PlayerScreenProps) {
  return (
    <Wrapper>
      <Text>Player</Text>
    </Wrapper>
  );
}

export default PlayerScreen;
