// components/SocialLoginButton.tsx

import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

type SocialLoginButtonProps = {
  iconName: string;
  iconColor: string;
  backgroundColor: string;
  onPress: () => void;
};

export default function SocialLoginButton({
  iconName,
  iconColor,
  backgroundColor,
  onPress,
}: SocialLoginButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor}]}
      onPress={onPress}>
      <Icon name={iconName} size={25} color={iconColor} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
