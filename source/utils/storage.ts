import AsyncStorage from '@react-native-async-storage/async-storage';

export enum EnumStorage {
  KEY_LANGUAGE = 'KEY_LANGUAGE',
}
export const getLanguage = () => AsyncStorage.getItem(EnumStorage.KEY_LANGUAGE);

export const setLanguage = (lang: string) =>
  AsyncStorage.setItem(EnumStorage.KEY_LANGUAGE, lang);
