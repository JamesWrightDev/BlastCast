import React, {useState, useEffect} from "react";
import styled from "styled-components/native";
import { Text, View, TouchableOpacity, Button } from "react-native";
import PlayerControls from "./PlayerControls";
import { Audio } from 'expo-av';

// https://traffic.libsyn.com/atpfm/atp376.mp3
const soundObject = new Audio.Sound();

const PlayerContainer = () => {
  const [playing, setPlay] = useState(false);

  const initPlay = async () => {
    try {
       await soundObject.loadAsync({ uri: 'https://traffic.libsyn.com/atpfm/atp375.mp3'});
       await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  }
  const onPress = async () => {
      if(playing){
        setPlay(false);
        await soundObject.pauseAsync();
      }else {
        await soundObject.playAsync()
        setPlay(true);
      }
  }

  const skip = async (length:number) => {
    const status = await soundObject.getStatusAsync();
    console.log(status);
  }

  useEffect(() => {
    initPlay();
    setPlay(true);
  }, []);

  return (
    <View>
      <Text>PLayer container</Text>
      <Button
        title={playing ? 'pause' : 'play'}
        onPress={() => onPress()}
      />
      <Button
        title="skip 30"
        onPress={() => skip(30)}
      />
      <PlayerControls />
    </View>
  );
};
// 'https://traffic.libsyn.com/atpfm/atp376.mp3'
export default PlayerContainer;
