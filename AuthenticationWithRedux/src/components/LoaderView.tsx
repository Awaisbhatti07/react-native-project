import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React from 'react';

export default function LoaderView() {
  return (
    <View style={styles.loadingOverlay}>
      <ActivityIndicator size="large" color="#A0AEB8" />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Black with 50% opacity
    justifyContent: 'center',
    alignItems: 'center',
  },
});
