import 'react-native-gesture-handler';
import React from 'react';

/**
 * try to import a custom navigation component
 * just to see if it works
 */
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';

/**
 * this feature doesn't change anything really, just makes it 
 * faster and more performant
 */
enableScreens();

export default function App() {
  return (
      <MealsNavigator />
  );
}