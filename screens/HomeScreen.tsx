import React from "react";
import { NavigationScreenProp } from "react-navigation";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import Wrapper from "../components/Wrapper";
import Card from "../components/Card";
import styled from "styled-components/native";
import fetchFeed from "../util/podcastApi";
import { useDispatch, useSelector } from "react-redux";
import fetchFeeds from "../util/podcastApi";

interface HomeScreenProps {
  navigation: NavigationScreenProp<any>;
}

const HomeScreen = (Props: HomeScreenProps) => {
  const dispatch = useDispatch();
  const libraryLoaded = useSelector((state) => state.library.loaded);
  const feedsLibrary = useSelector((state) => state.library.feeds);

  const handlePress = (feedUrl: string, name:string, imageSource:string, description: string ) => {
    Props.navigation.navigate("Author", {
      feedUrl: feedUrl,
      name: name,
      imageSource: imageSource,
      description: description
    })
  }

  if (!libraryLoaded) {
    (async () => {
      const feeds = await fetchFeeds("tech");
      dispatch({
        type: "@FETCH_LIBRARY_FEEDS_SUCCESS",
        payload: feeds.results,
      });
    })();
  }

  return (
    <Wrapper>
      <Header>Featured</Header>
      <ScrollView>
        <View>
          <Rail horizontal bounces alwaysBounceHorizontal>
            <RailItem
              onPress={() => Props.navigation.navigate("Author")}
              activeOpacity={0.7}
            >
              <Card
                heading="Tech Podcast"
                subheading="Wired Magazine"
                imageUrl="https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
            </RailItem>
          </Rail>
        </View>
        <View>
          <Rail horizontal bounces alwaysBounceHorizontal>
            {feedsLibrary &&
              feedsLibrary.map((item: any) => {
                return (
                  <RailItem
                    key={item.collectionId}
                    onPress={() => handlePress(
                      item.feedUrl,
                      item.artistName,
                      item.artworkUrl600,
                      item.collectionName,
                      )}
                    activeOpacity={0.7}
                  >
                    <Card
                      heading={item.artistName}
                      subheading={item.collectionName}
                      imageUrl={item.artworkUrl600}
                    />
                  </RailItem>
                );
              })}
          </Rail>
        </View>
      </ScrollView>
    </Wrapper>
  );
};

const Header = styled(Text)`
  font-size: 32px;
  color: white;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Rail = styled(ScrollView)`
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: grey;
  padding-bottom: 25px;
  margin-bottom: 50px;
`;

const RailItem = styled(TouchableOpacity)`
  width: 150px;
  height: 300px;
  margin-right: 25px;
`;

export default HomeScreen;
