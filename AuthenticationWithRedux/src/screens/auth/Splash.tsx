import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';

// Navigations
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// NativeStackNavigationProp: Used to type only the navigation object (e.g. with useNavigation).

// NativeStackScreenProps: Used to type both navigation and route props in a screen component.

import {RootStackParamList} from '../../navigations/type'; // yeh import karo

type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList, 'Splash'>;

const Splash = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/react-native-logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A4A4A',
  },
  image: {
    width: 250,
    height: 250,
  },
});

export default Splash;


/*

1. NativeStackNavigationProp
🔹 Sirf navigation object ko type karne ke liye use hota hai
Agar aapko sirf navigation chahiye, aur route ki zarurat nahi hai, to aap NativeStackNavigationProp use karte hain.

💡 Use case:
Aap component me navigation.replace() ya navigation.navigate() use kar rahe hain.

Route params ki zarurat nahi.

2. NativeStackScreenProps
🔹 navigation aur route dono ko type karne ke liye use hota hai
Agar aap functional component ke props me navigation aur route dono chahte hain, to NativeStackScreenProps use karte hain.

💡 Use case:
Jab aap kisi screen ko params ke sath navigate karte ho.

Ya jab aap props.route.params.xyz access karna chahte ho.

*/
