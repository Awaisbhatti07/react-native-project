/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

// Redux
import {useDispatch} from 'react-redux';
import {loginSuccess} from '../../redux/auth/authSlice';

// Navigation
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations/type';

// API & Utils
import {loginUser} from '../../api/authApi/authApi';
import {getErrorMessage} from '../../utils/errorHandler';
import Snackbar from 'react-native-snackbar';

// Custom Components
import TextField from '../../components/TextField';
import CustomButton from '../../components/Button';
import SocialLoginButton from '../../components/SocialLoginButton';
import LoaderView from '../../components/LoaderView';

// Styles
import styles from '../auth/styles/LoginStyles';

// Define type for navigation prop
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const Login = () => {
  // State for user input
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp>();

  // Show snackbar with custom message
  const showSnackbar = (message: string) => {
    Snackbar.show({
      text: message,
      backgroundColor: '#A0AEB8',
      textColor: '#4A4A4A',
      duration: 3000,
    });
  };

  // Validate username and password before attempting login
  const validateInputs = () => {
    if (!userName.trim()) {return showSnackbar('Please enter a username');}
    if (!password.trim()) {return showSnackbar('Please enter a password');}
    handleLogin(); // If valid, proceed to login
  };

  // Perform the login API call and handle response
  const handleLogin = async () => {
    setLoading(true); // Show loader
    try {
      const userData = await loginUser(userName, password); // API call
      dispatch(loginSuccess(userData)); // Save user in Redux store

      // Navigate to Home screen and reset stack
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    } catch (error) {
      console.error('Login failed:', getErrorMessage(error));
      showSnackbar('Login failed. Please try again.');
    } finally {
      setLoading(false); // Hide loader
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#4A4A4A'}}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome To Redux</Text>

        <View style={styles.textFieldContainer}>
          {/* Username Field */}
          <TextField
            label="Username"
            placeholder="Enter your username"
            value={userName}
            onChangeText={setUserName}
            leftIcon="account"
          />

          {/* Password Field */}
          <TextField
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            isSecureField
            leftIcon="lock"
          />

          {/* Login Button */}
          <CustomButton
            title="Login"
            backgroundColor="#F2F2F2"
            titleColor="#4A4A4A"
            onPress={validateInputs}
          />

          {/* OR separator */}
          <View style={styles.separatorContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>

          {/* Social Login Buttons */}
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

      {/* Loader overlay shown while logging in */}
      {loading && <LoaderView />}
    </SafeAreaView>
  );
};

export default Login;
