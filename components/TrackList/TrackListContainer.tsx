import React from 'react';
import styled from 'styled-components/native';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
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
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Player')
  }
  return (
    <ScrollView>
      <View>
        {
          Props.trackList &&
          Props.trackList.map((item, index) =>
              <TouchableOpacity onPress={() => handlePress()}>
                <TrackItem
                  key={`${item.title}_${index}`}
                  name={item.title}
                  length={'123'}
                  date={"10/2/2020"}
                  sourceUrl={item.link}
                />
              </TouchableOpacity>
          )
        }
      </View>
    </ScrollView>
  )
}

const TrackWrapper = styled(View)`
  padding: 30px 0;
`
const TrackName = styled(Text)`
  color: white;
  font-size: 18px;
`
export default TrackList;
