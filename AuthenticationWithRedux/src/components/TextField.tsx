import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';

type TextFieldProps = {
  label: string;
  isSecureField?: boolean;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  leftIcon?: string;
};

export default function TextField({
  label,
  isSecureField = false,
  placeholder = '',
  onChangeText,
  value,
  leftIcon,
}: TextFieldProps) {
  const [hideText, setHideText] = useState(isSecureField);

  return (
    <View>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={hideText}
        mode="outlined"
        style={styles.input}
        left={
          leftIcon ? (
            <TextInput.Icon icon={leftIcon} color="#A0AEB8" />
          ) : undefined
        }
        right={
          isSecureField ? (
            <TextInput.Icon
              icon={hideText ? 'eye-off' : 'eye'}
              onPress={() => setHideText(!hideText)}
              color="#A0AEB8"
            />
          ) : undefined
        }
        theme={{
          colors: {
            placeholder: '#A0AEB8',
            text: '#A0AEB8',
            primary: '#FFFFFF',
            outline: '#A0AEB8',
            onSurfaceVariant: '#A0AEB8', // change PlaceHoder Text Color
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: 'clear',
  },
});
