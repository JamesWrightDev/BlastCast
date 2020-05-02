import React from 'react';
import styled from 'styled-components/native';
import {
  Text,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

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
      <TrackName>
        {Props.name}
       </TrackName>
    </TrackWrapper>
  )
}

const TrackList = (Props: TrackListProps) => {
  return (
    <ScrollView>
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
    </ScrollView>
  )
}

const TrackWrapper = styled(View)`
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: grey;
  padding: 30px 0;
`
const TrackName = styled(Text)`
  color: white;
  font-size: 18px;
`
export default TrackList;
