import {
  FlexAlignType,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {MediumText} from '../text';
import {verticalScale} from '../../utils/scale';
import {borderRadius as radius} from '../../utils/typography';
import {color} from '../../constants/colors';

interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  lable: string;
  labelStyle?: StyleProp<TextStyle>;
  alignSelf?: FlexAlignType | 'auto' | undefined;
  backgroundColor?: string;
  borderRadius?: number;
}

const Button = ({
  style,
  lable,
  labelStyle,
  alignSelf = 'auto',
  backgroundColor,
  borderRadius = radius.large,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.body, {alignSelf, backgroundColor, borderRadius}, style]}>
      <MediumText style={[styles.label, labelStyle]} fontWeight="500">
        {lable}
      </MediumText>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  body: {
    paddingVertical: verticalScale(16),
  },
  label: {
    color: color.white[1],
  },
});
