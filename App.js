import 'react-native-gesture-handler';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import mealsReducer from './store/reducer/meals';

/**
 * try to import a custom navigation component
 * just to see if it works
 */
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';

const rootReducer = combineReducers({
  meals: mealsReducer
})
const store = createStore(rootReducer);

/**
 * this feature doesn't change anything really, just makes it 
 * faster and more performant
 */
enableScreens();

/**
 * load all the fonts to be used here
 */
const fetchFonts =() => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if(!fontLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={ () => setFontLoaded(true)}
      />
    )
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}