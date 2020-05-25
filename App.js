import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * try to import a custom navigation component
 * just to see if it works
 */
import MealsNavigator from './navigation/MealsNavigator';

export default function App() {
  return (
      <MealsNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
