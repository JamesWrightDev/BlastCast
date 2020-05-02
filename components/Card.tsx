import React from 'react';
import styled from 'styled-components/native';

import {
  Text,
  View,
  Image,
  ImageBackground
} from 'react-native';

type CardProps = {
  heading: string,
  subheading: string,
  imageUrl: string,
}

const Card = (props: CardProps) => {
  return(
    <CardWrapper>
      <CardImage
        imageStyle={{ borderRadius: 8 }}
        source={{
          uri:
            props.imageUrl,
        }}
      >
      </CardImage>
      <CardInfo>
        <CardTitle header>
          {props.heading}
        </CardTitle>
        <CardTitle>
          {props.subheading}
        </CardTitle>
      </CardInfo>
    </CardWrapper>
  )
}

const CardWrapper = styled(View)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-start;
`

const CardImage = styled(ImageBackground)`
  height: 50%;
  width: 100%;
  border-radius: 8px;
  justify-content: flex-end;
`

const CardInfo = styled(View)`
  display: flex;
  justify-content: flex-end;
  padding-top: 18px;
  border-radius: 8px;
`

const CardTitle = styled(Text)`
  font-size: ${props => props.header ? '24px' : '16px'};
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.header ? 'bold' : 'normal'};
  text-shadow: 20px 20px black;
  padding-bottom: 8px;
`

export default Card;