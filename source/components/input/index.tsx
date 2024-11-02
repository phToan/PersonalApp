import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
} from 'react-native';
import React from 'react';
import Column from '../column';
import {horizontalScale, verticalScale} from '../../utils/scale';
import {NormalText} from '../text';
import {color} from '../../constants/colors';
import {borderRadius} from '../../utils/typography';

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions | undefined;
  secureTextEntry?: boolean;
  inputStyle?: StyleProp<TextStyle>;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const ColumnInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
  inputStyle,
  onFocus,
  onBlur,
}: InputProps) => {
  return (
    <Column gap={verticalScale(10)}>
      <NormalText>{label}</NormalText>
      <Column style={styles.input}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          style={[styles.textInput, inputStyle]}
          onFocus={onFocus && onFocus}
          onBlur={onBlur && onBlur}
        />
      </Column>
    </Column>
  );
};

export const RowInput = () => {
  return (
    <View>
      <Text>ColumnInput</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: color.white[2],
    borderRadius: borderRadius.normal,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
  },
  textInput: {
    width: '100%',
    color: color.black[1],
  },
});
