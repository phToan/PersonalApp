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
import {horizontalScale, scale, verticalScale} from '../../utils/scale';
import {borderRadius as radius} from '../../utils/typography';
import {color} from '../../constants/colors';
import Row from '../row';
import {SvgProps} from 'react-native-svg';
interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  lable: string;
  labelStyle?: StyleProp<TextStyle>;
  alignSelf?: FlexAlignType | 'auto' | undefined;
  backgroundColor?: string;
  onPress: () => void;
  icon?: React.FC<SvgProps>;
  iconSize?: number;
}

const Button = ({
  style,
  lable,
  labelStyle,
  alignSelf = 'auto',
  backgroundColor,
  onPress,
  icon: Icon,
  iconSize = scale(20),
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={[styles.body, {alignSelf, backgroundColor}, style]}>
      <Row gap={horizontalScale(10)} style={styles.inner}>
        {Icon && <Icon height={iconSize} width={iconSize} />}
        <MediumText style={[styles.label, labelStyle]} fontWeight="700">
          {lable}
        </MediumText>
      </Row>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    borderRadius: radius.large,
  },
  label: {
    color: color.white[1],
  },
  inner: {
    alignItems: 'center',
    height: verticalScale(42),
  },
});
