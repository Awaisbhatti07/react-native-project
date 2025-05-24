import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type TextFieldProps = {
  title: string;
  backgroundColor: string;
  titleColor: string;
  onPress: () => void;
};

export default function CustomButton({
  title,
  backgroundColor,
  titleColor,
  onPress,
}: TextFieldProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.buttonStyle, {backgroundColor}]}
        onPress={onPress}>
        <Text style={[styles.titleStyle, {color: titleColor}]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  buttonStyle: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: '600',
  },
});
