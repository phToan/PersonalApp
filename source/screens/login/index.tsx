import React from 'react';
import MainScreen from '../../components/mainScreen';
import {GigText, MediumText} from '../../components/text';
import {useTranslation} from 'react-i18next';
import Column from '../../components/column';
import Button from '../../components/button';
import {verticalScale} from '../../utils/scale';
import {color} from '../../constants/colors';
import Row from '../../components/row';
import {styles} from './styles';
import {FacebookIcon, GoogleIcon} from '../../../assets/icons';

const LoginScreen = () => {
  const {t} = useTranslation();
  const onPressStarted = () => {};
  const handleLoginFB = () => {};
  const handleLoginGG = () => {};
  return (
    <MainScreen>
      <Column gap={verticalScale(10)}>
        <GigText textAlign="center">{t('Login.GetStarted')}</GigText>
        <MediumText textAlign="center">{t('Login.SignupOrLogin')}</MediumText>
        <Button
          lable={t('Login.Started')}
          onPress={onPressStarted}
          backgroundColor={color.neutral[1]}
        />
        <Row justifyContent="space-between" style={styles.or}>
          <Column style={styles.line} />
          <MediumText textColor={color.gray[2]}>OR</MediumText>
          <Column style={styles.line} />
        </Row>
        <Button
          icon={FacebookIcon}
          onPress={handleLoginFB}
          lable={t('Login.ContinueFacebook')}
          backgroundColor={color.white[1]}
          labelStyle={styles.labelBtn}
        />
        <Button
          icon={GoogleIcon}
          onPress={handleLoginGG}
          lable={t('Login.ContinueGmail')}
          backgroundColor={color.white[1]}
          labelStyle={styles.labelBtn}
        />
      </Column>
    </MainScreen>
  );
};

export default LoginScreen;
