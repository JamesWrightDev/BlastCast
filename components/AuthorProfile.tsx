import React from 'react';
import styled from 'styled-components/native';
import {
  Image,
  Text,
  View,
} from 'react-native';
import TrackList from './TrackList/TrackListContainer';

type AuthorProfileProps = {
  heading: string,
  subheading: string,
  imageUrl: string,
}

const AuthorProfile = (Props: AuthorProfileProps) => {

  return (
    <View>
      <ProfileImage
        source={{
          uri: 'https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
        }
      />
      <ProfileName>Tech Podcast123</ProfileName>
      <TrackList
        author="TechPodcast"
        trackList={[
          {
            name: "james",
            length: 12,
            date: "120/20/10"
          },
          {
            name: "james",
            length: 12,
            date: "120/20/10"
          },
          {
            name: "james",
            length: 12,
            date: "120/20/10"
          },
          {
            name: "james",
            length: 12,
            date: "120/20/10"
          },
          {
            name: "james",
            length: 12,
            date: "120/20/10"
          },
          {
            name: "james",
            length: 12,
            date: "120/20/10"
          },
          {
            name: "james",
            length: 12,
            date: "120/20/10"
          },
          {
            name: "james",
            length: 12,
            date: "120/20/10"
          },
          {
            name: "james",
            length: 12,
            date: "120/20/10"
          },
          {
            name: "james",
            length: 12,
            date: "120/20/10"
          },
          {
            name: "james",
            length: 12,
            date: "120/20/10"
          },
          {
            name: "james",
            length: 12,
            date: "120/20/10"
          },
          {
            name: "james",
            length: 12,
            date: "120/20/10"
          },
          {
            name: "james",
            length: 12,
            date: "120/20/10"
          },
          {
            name: "james",
            length: 12,
            date: "120/20/10"
          },
          {
            name: "james",
            length: 12,
            date: "120/20/10"
          },
          {
            name: "james",
            length: 12,
            date: "120/20/10"
          },
          {
            name: "james",
            length: 12,
            date: "120/20/10"
          },
          {
            name: "james",
            length: 12,
            date: "120/20/10"
          },
          {
            name: "james",
            length: 12,
            date: "120/20/10"
          },
          {
            name: "james",
            length: 12,
            date: "120/20/10"
          },
          {
            name: "james",
            length: 12,
            date: "120/20/10"
          },
          {
            name: "james",
            length: 12,
            date: "120/20/10"
          },
        ]}
      />
    </View>
  )
}

const ProfileImage = styled(Image)`
  width: 100px;
  height: 100px;
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

export default AuthorProfile;