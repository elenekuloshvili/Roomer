import React from 'react';
import {Keyboard, Pressable, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BeforeAuth from './src/navigation/BeforeAuth';

function App(): JSX.Element {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />

      <Pressable style={styles.root} onPress={Keyboard.dismiss}>
        <NavigationContainer>
          <BeforeAuth />
        </NavigationContainer>
      </Pressable>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
