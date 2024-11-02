import React from 'react';
import MainScreen from '../../components/mainScreen';
import {NormalText} from '../../components/text';
import Button from '../../components/button';

const HomeScreen = () => {
  return (
    <MainScreen>
      <NormalText>kddldld</NormalText>
      <Button lable={'ok'} onPress={() => {}} backgroundColor="red" />
    </MainScreen>
  );
};

export default HomeScreen;
