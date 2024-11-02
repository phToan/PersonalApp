import {Platform, Text, TextProps} from 'react-native';
import {color} from '../../constants/colors';
import {fontSize as size} from '../../utils/typography';
import React from 'react';

interface CustomTextProps extends TextProps {
  fontSize?: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  backgroundColor?: string;
  textColor?: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
}

const fontFamily =
  Platform.OS === 'android' ? 'Roboto-Medium' : 'SF-Pro-Text-Medium';

export const CustomText: React.FC<CustomTextProps> = ({
  style,
  fontSize = 14,
  fontWeight = 'normal',
  textColor = color.black[1],
  textAlign = 'auto',
  children,
  ...props
}) => {
  return (
    <Text
      style={[
        {fontSize, fontWeight, color: textColor, fontFamily, textAlign},
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export const TinyText = ({
  fontWeight,
  textColor = color.black[1],
  style,
  children,
  textAlign = 'auto',
  ...props
}: CustomTextProps) => {
  return (
    <Text
      style={[
        {
          fontSize: size.tiny,
          fontWeight,
          color: textColor,
          fontFamily,
          textAlign,
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export const SmallText = ({
  fontWeight,
  textColor = color.black[1],
  style,
  textAlign = 'auto',
  children,
  ...props
}: CustomTextProps) => {
  return (
    <Text
      style={[
        {
          fontSize: size.small,
          fontWeight,
          color: textColor,
          fontFamily,
          textAlign,
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export const NormalText = ({
  fontWeight,
  textColor = color.black[1],
  style,
  textAlign = 'auto',
  children,
  ...props
}: CustomTextProps) => {
  return (
    <Text
      style={[
        {
          fontSize: size.normal,
          fontWeight,
          color: textColor,
          fontFamily,
          textAlign,
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export const MediumText = ({
  fontWeight,
  textColor = color.black[1],
  style,
  textAlign = 'auto',
  children,
  ...props
}: CustomTextProps) => {
  return (
    <Text
      style={[
        {
          fontSize: size.medium,
          fontWeight,
          color: textColor,
          fontFamily,
          textAlign,
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export const LargeText = ({
  fontWeight,
  textColor = color.black[1],
  style,
  textAlign = 'auto',
  children,
  ...props
}: CustomTextProps) => {
  return (
    <Text
      style={[
        {
          fontSize: size.large,
          fontWeight,
          color: textColor,
          fontFamily,
          textAlign,
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export const HugeText = ({
  fontWeight,
  textColor = color.black[1],
  style,
  textAlign = 'auto',
  children,
  ...props
}: CustomTextProps) => {
  return (
    <Text
      style={[
        {
          fontSize: size.huge,
          fontWeight,
          color: textColor,
          fontFamily,
          textAlign,
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export const BigText = ({
  fontWeight,
  textColor = color.black[1],
  style,
  textAlign = 'auto',
  children,
  ...props
}: CustomTextProps) => {
  return (
    <Text
      style={[
        {
          fontSize: size.big,
          fontWeight,
          color: textColor,
          fontFamily,
          textAlign,
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export const GigText = ({
  fontWeight,
  textColor = color.black[1],
  style,
  textAlign = 'auto',
  children,
  ...props
}: CustomTextProps) => {
  return (
    <Text
      style={[
        {
          fontSize: size.gigantic,
          fontWeight,
          color: textColor,
          fontFamily,
          textAlign,
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};
