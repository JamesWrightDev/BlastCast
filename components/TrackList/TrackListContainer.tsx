import React from 'react';
import styled from 'styled-components/native';
import {
  Text,
  View,
} from 'react-native';

type TrackProps = {
  name: string,
  length: number,
  date: string,
}

type TrackListProps = {
  trackList: Array<TrackProps>,
  author: string,
}

const Track = (Props: TrackProps) => {
  return (
    <TrackWrapper>
      <Text>
        {Props.name}
       </Text>
    </TrackWrapper>
  )
}

const TrackList = (Props: TrackListProps) => {
  return (
    <View>
      {
        Props.trackList.map(item =>
            <Track
              name={item.name}
              length={item.length}
              date={"10/2/2020"}
            />
        )
      }
    </View>
  )
}

const TrackWrapper = styled(View)`
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: grey;
  padding: 20px 0;
`

export default TrackList;
