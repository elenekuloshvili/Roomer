import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackScreenProps} from '../../navigation/types';
import {DoubleArrows} from '../../../assets/svgIcons';

const WelcomeScreen = ({navigation}: RootStackScreenProps<'Welcome'>) => {
  const onLoginPressHandler = () => navigation.navigate('Login');
  const onSignupPressHandler = () => navigation.navigate('Signup');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.textContainer}>
        <View style={styles.textRoomerContainer}>
          <Text style={styles.textRoomer}>Roomer</Text>
          <Text style={styles.textHive}>By HIVE (ROMA)</Text>
        </View>

        <View style={styles.sloganContainer}>
          <View style={styles.logo}>
            <DoubleArrows />
          </View>
          <Text style={styles.slogan}>
            Where <Text style={styles.sloganColor}>work</Text> meets{' '}
            <Text style={styles.sloganColor}>community.</Text>
          </Text>
        </View>
      </View>

      <View style={styles.btnsContainer}>
        <Button
          style={styles.btn}
          textStyle={styles.btnText}
          onPress={onLoginPressHandler}>
          Log in
        </Button>
        <Button
          style={styles.btn}
          textStyle={styles.btnText}
          onPress={onSignupPressHandler}>
          Sign up
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 16,
  },
  textContainer: {
    flex: 1,
  },
  textRoomerContainer: {
    paddingVertical: 16,
    alignSelf: 'center',
  },
  textRoomer: {
    color: '#fd614d',
    fontFamily: 'PPNeueMachina-InktrapUltrabold',
    fontSize: 32,
  },
  textHive: {
    color: '#ffffff',
    fontFamily: 'PPNeueMachina-PlainLight',
    fontSize: 16,
    marginLeft: 96,
    marginTop: 12,
  },
  sloganContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'flex-end',
  },
  slogan: {
    color: '#ffffff',
    fontFamily: 'PPNeueMachina-InktrapUltrabold',
    fontSize: 36,
    alignSelf: 'center',
  },
  sloganColor: {
    color: '#fd614d',
  },
  btnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 16,
  },
  btn: {
    backgroundColor: '#fd614d',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 32,
    width: '40%',
    alignItems: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontFamily: 'PPNeueMachina-InktrapUltrabold',
  },
});
