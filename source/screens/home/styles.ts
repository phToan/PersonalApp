import {StyleSheet} from 'react-native';
import {verticalScale} from '../../utils/scale';
import {color} from '../../constants/colors';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  line: {
    height: verticalScale(1),
    width: '45%',
    backgroundColor: color.gray[1],
  },
  or: {
    alignItems: 'center',
  },
  labelBtn: {
    color: color.neutral[1],
  },
});
