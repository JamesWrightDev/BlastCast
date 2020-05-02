import React from 'react';
import styled from 'styled-components/native';
import {
  Image,
  Text,
  View,
} from 'react-native';
import { Author } from '../types';
import TrackList from './TrackList/TrackListContainer';

const AuthorProfile = (Props: Author) => {
  return (
    <View>
      <ProfileImage
        source={{uri: Props.imageUrl}}
      />
      <ProfileName>
        {Props.name}
      </ProfileName>
      <TrackList
        trackList={Props.tracks}
      />
    </View>
  )
}

const ProfileImage = styled(Image)`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  margin: 0 auto;
`

const ProfileName = styled(Text)`
  font-size: 32px;
  text-align: center;
  padding: 30px 0;
  color: white;
  font-weight: bold;
`
const ProfileDescription = styled(Text)`
  font-size: 18px;
  text-align: center;
  color: white;
  font-weight: bold;
`

export default AuthorProfile;