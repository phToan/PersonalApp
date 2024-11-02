import {Dimensions, PixelRatio} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;

const scale = (size: number) => (screenWidth / guidelineBaseWidth) * size;
const verticalScale = (size: number) =>
  (screenHeight / guidelineBaseHeight) * size;
const horizontalScale = (size: number) =>
  (screenWidth / guidelineBaseWidth) * size;

const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export {
  scale,
  verticalScale,
  horizontalScale,
  moderateScale,
  screenWidth,
  screenHeight,
};
