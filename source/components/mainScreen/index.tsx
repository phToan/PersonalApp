import {SafeAreaView, StyleSheet} from 'react-native';
import React, {memo, ReactNode} from 'react';
import Column from '../column';
import {horizontalScale} from '../../utils/scale';

const MainScreen = ({children}: {children: ReactNode}) => {
  return (
    <SafeAreaView style={styles.root}>
      <Column style={styles.main}>{children}</Column>
    </SafeAreaView>
  );
};

export default memo(MainScreen);

const styles = StyleSheet.create({
  root: {flex: 1},
  main: {
    paddingHorizontal: horizontalScale(20),
  },
});
