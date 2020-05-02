import React from 'react';
import styled from 'styled-components/native';
import {
  Text,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Track} from '../../types';

type TrackListProps = {
  trackList: Array<Track>,
}

const TrackItem = (Props: Track) => {
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
          Props.trackList &&
          Props.trackList.map(item =>
              <TrackItem
                name={item.title}
                length={'123'}
                date={"10/2/2020"}
                sourceUrl={item.link}
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
