import {SafeAreaView, StyleSheet} from 'react-native';
import React, {memo, ReactNode} from 'react';
import Column from '../column';
import {horizontalScale} from '../../utils/scale';

const MainScreen = ({children}: {children: ReactNode}) => {
  return (
    <SafeAreaView>
      <Column style={styles.main}>{children}</Column>
    </SafeAreaView>
  );
};

export default memo(MainScreen);

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: horizontalScale(20),
  },
});
