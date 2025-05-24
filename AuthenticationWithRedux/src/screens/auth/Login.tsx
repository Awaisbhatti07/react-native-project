/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

// Custom Components
import TextField from '../../components/TextField';
import CustomButton from '../../components/Button';
import SocialLoginButton from '../../components/SocialLoginButton';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={[{flex: 1}, {backgroundColor: '#4A4A4A'}]}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome To Redux</Text>
        <View style={styles.textFieldContainer}>
          <TextField
            label="user name"
            placeholder="Enter your username"
            value={userName}
            onChangeText={setUserName}
            leftIcon="account"
          />

          <TextField
            label="password"
            isSecureField={true}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            leftIcon="lock"
          />

          <CustomButton
            title="Login"
            backgroundColor="#F2F2F2"
            titleColor="#4A4A4A"
            onPress={() => console.log('Login pressed')}
          />

          <View style={styles.separatorContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.socialLoginContainer}>
            <SocialLoginButton
              iconName="facebook"
              iconColor="#fff"
              backgroundColor="#3b5998"
              onPress={() => console.log('Facebook login')}
            />

            <SocialLoginButton
              iconName="google"
              iconColor="#fff"
              backgroundColor="#DB4437"
              onPress={() => console.log('Google login')}
            />

            <SocialLoginButton
              iconName="apple"
              iconColor="#fff"
              backgroundColor="#000000"
              onPress={() => console.log('Apple login')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 150,
  },
  headerText: {
    fontSize: 32,
    fontWeight: '800',
    color: 'white',
  },
  textFieldContainer: {
    flexDirection: 'column',
    marginTop: 16,
    gap: 10,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#A0AEB8',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#A0AEB8',
    fontWeight: '600',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
});
