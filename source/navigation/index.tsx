import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AppRootParams} from './types';
import HomeScreen from '../screens/home';
import LoginScreen from '../screens/login';
import {getLanguage} from '../utils/storage';
import {LanguageEnum} from '../model/language';
import i18n from '../utils/i18n';

const MainStack = createStackNavigator<AppRootParams>();
// const LoginStackNavigator = createStackNavigator<LoginStackParams>();
// const DashboardStackNavigator = createStackNavigator<DashboardStackParams>();

// const LoginStack = () => {
//   return (
//     <LoginStackNavigator.Navigator
//       initialRouteName="LoginScreen"
//       screenOptions={{headerShown: false}}>
//       <LoginStackNavigator.Screen name="LoginScreen" component={LoginScreen} />
//     </LoginStackNavigator.Navigator>
//   );
// };

// const DashboardStack = () => {
//   return (
//     <DashboardStackNavigator.Navigator
//       initialRouteName="HomeScreen"
//       screenOptions={{headerShown: false}}>
//       <DashboardStackNavigator.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//       />
//     </DashboardStackNavigator.Navigator>
//   );
// };

function StackNavigator() {
  useEffect(() => {
    const initLanguage = async () => {
      const language = await getLanguage();
      i18n.changeLanguage(language ?? LanguageEnum.EN);
    };
    initLanguage();
  }, []);

  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen name="LoginScreen" component={LoginScreen} />
        <MainStack.Screen name="HomeScreen" component={HomeScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
