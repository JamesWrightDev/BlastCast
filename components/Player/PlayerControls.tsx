import React from 'react';
import styled from 'styled-components/native';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { PlayerScreen } from '../../screens';
import PlayIcon from '../../icons/play.svg';
import VolumeIcon from '../../icons/volume.svg';

const PlayerControls = () => {
  return(
    <PlayerControlsWrapper>
      <PlayPauseWrapper>
        <PlayIcon
          height={40}
          width={40}
          fill={'white'}
        />
      </PlayPauseWrapper>
    </PlayerControlsWrapper>
  )
}

const PlayerControlsWrapper = styled(View)`
  padding: 50px 0;
`
const PlayPauseWrapper = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
`
export default PlayerControls;