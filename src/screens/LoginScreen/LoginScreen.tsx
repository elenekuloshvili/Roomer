import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, TextInput} from '../../components';
import {Arrow} from '../../../assets/svgIcons';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.inputsContainer}>
        <Text style={styles.loginText}>
          Log <Text style={styles.logInTextSAlternativeColor}>In</Text>
        </Text>

        <View>
          <TextInput placeholder="Email" />
          <TextInput
            placeholder="Password"
            secure={true}
            textInputStyle={styles.password}
          />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.arrow}>
          <Arrow />
        </View>
        <Button style={styles.btn} textStyle={styles.btnText}>
          Log in
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  inputsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  loginText: {
    fontFamily: 'PPNeueMachina-InktrapUltrabold',
    color: '#ffffff',
    fontSize: 36,
    paddingVertical: 32,
    alignSelf: 'center',
  },
  logInTextSAlternativeColor: {
    color: '#ccdc2e',
  },
  password: {
    width: '90%',
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    marginRight: 100,
  },
  btn: {
    backgroundColor: '#ccdc2e',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 32,
    width: '40%',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 24,
  },
  btnText: {
    color: '#ffffff',
    fontFamily: 'PPNeueMachina-InktrapUltrabold',
  },
});
