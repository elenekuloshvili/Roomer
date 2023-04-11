import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, TextInput} from '../../components';
import {Arrow} from '../../../assets/svgIcons';

const SignupScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior="position">
        <View style={{height: '100%'}}>
          <View style={styles.headlineContainer}>
            <Text style={styles.headline}>
              Sign <Text style={styles.headlineAltColor}>up</Text>
            </Text>
            <View style={styles.arrow}>
              <Arrow />
            </View>
          </View>
          <Text style={styles.joinUs}>
            Join us at Hive and discover the sweet life of co-working!
          </Text>
          <View style={styles.inputsContainer}>
            <View style={styles.nameInputContainer}>
              <TextInput
                placeholder="Name"
                textInputContainerStyle={styles.nameInput}
              />
              <TextInput
                placeholder="Surname"
                textInputContainerStyle={styles.surnameInput}
              />
            </View>
            <TextInput placeholder="Email" />
            <TextInput
              placeholder="Password"
              secure={true}
              textInputStyle={styles.password}
            />
            <TextInput
              placeholder="Confirm Password"
              secure={true}
              textInputStyle={styles.password}
            />
            <TextInput placeholder="Mobile Number" />
          </View>
          <Button style={styles.btn} textStyle={styles.btnText}>
            Join
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  headlineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headline: {
    fontFamily: 'PPNeueMachina-InktrapUltrabold',
    color: '#ffffff',
    fontSize: 36,
    paddingVertical: 32,
  },
  headlineAltColor: {
    color: '#fd614d',
  },
  arrow: {
    marginBottom: -50,
  },
  joinUs: {
    color: '#ffffff',
    fontFamily: 'PPNeueMachina-PlainLight',
    maxWidth: '80%',
    lineHeight: 16,
  },
  inputsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nameInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameInput: {
    width: '30%',
  },
  surnameInput: {
    width: '67%',
  },
  password: {
    width: '90%',
  },
  btn: {
    backgroundColor: '#fd614d',
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
