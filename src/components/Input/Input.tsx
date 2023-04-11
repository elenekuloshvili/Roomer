import React, {useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';
import {Icon} from 'react-native-eva-icons';

type InputProps = TextInputProps & {
  textInputContainerStyle?: StyleProp<TextStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  icon?: string;
  secure?: boolean;
  onPress?: () => void;
};

const Input = ({
  placeholder,
  secure,
  textInputStyle,
  textInputContainerStyle,
  ...props
}: InputProps) => {
  const [secureTextEntry, setSecureTextEntry] = useState(secure);

  const pressHandler = () => setSecureTextEntry(prev => !prev);

  return (
    <View style={[styles.input, textInputContainerStyle]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#807c7c'}
        style={[styles.inputLength, textInputStyle]}
        secureTextEntry={secureTextEntry}
        {...props}
      />

      {secure && (
        <Icon
          name={secureTextEntry ? 'eye-off-outline' : 'eye-outline'}
          width={20}
          height={20}
          onPress={pressHandler}
        />
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginBottom: 10,
    borderWidth: 3,
    // borderColor: '#ccdc2e', // No error
    // borderColor: '#fd614d', // error
  },
  inputLength: {
    padding: 0,
    width: '100%',
    height: 20,
  },
});
