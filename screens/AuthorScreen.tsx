import React, {useEffect, useState} from 'react';

import { NavigationScreenProp } from 'react-navigation';
import { Text, View } from 'react-native';
import Wrapper from '../components/Wrapper';
import AuthorProfile from '../components/AuthorProfile';
import parseFeed from '../util/xmlParser';

interface AuthorScreenProps {
  navigation: NavigationScreenProp<any>;
}

function AuthorScreen(Props: AuthorScreenProps) {
  const [trackList, setTrackList] = useState([]);
  const {
    feedUrl,
    name,
    imageSource,
    description,
  } = Props.route.params;

  useEffect(() => {
    (async () => {
      const data = await parseFeed(feedUrl);
      setTrackList(data);
    })();
  }, []);

  parseFeed(feedUrl);
  return (
    <Wrapper>
      <AuthorProfile
        id={1}
        name={name}
        imageUrl={imageSource}
        description={description}
        tracks={trackList}
      />
    </Wrapper>
  );
}

export default AuthorScreen;