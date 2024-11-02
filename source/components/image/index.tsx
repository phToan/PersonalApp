import {StyleProp} from 'react-native';
import React from 'react';
import FastImage, {
  ImageStyle,
  ResizeMode,
  Source,
} from 'react-native-fast-image';

interface ImageProps {
  uri?: string;
  source?: Source;
  style?: StyleProp<ImageStyle>;
  resizeMode?: ResizeMode;
}

const Image = ({uri, source, style, resizeMode}: ImageProps) => {
  return (
    <FastImage
      source={source ? source : {uri: uri}}
      style={style}
      resizeMode={resizeMode}
    />
  );
};

export default Image;
