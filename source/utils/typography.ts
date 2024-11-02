import {moderateScale, scale} from './scale';

export const fontSize = {
  tiny: moderateScale(10),
  small: moderateScale(12),
  normal: moderateScale(14),
  medium: moderateScale(16),
  large: moderateScale(18),
  big: moderateScale(20),
  huge: moderateScale(24),
  gigantic: moderateScale(26),
};

export const borderRadius = {
  tiny: scale(4),
  small: scale(6),
  normal: scale(8),
  medium: scale(10),
  large: scale(12),
  big: scale(16),
  huge: scale(20),
  gigantic: scale(26),
};
