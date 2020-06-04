import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'
import MealList from '../components/MealList';

import MenuButton from '../components/MenuButton';
import Titles from '../components/Titles'

// get data
import { CATEGORIES } from '../data/dummy-data';
import { MEALS } from '../data/meals';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const FavoritesScreen = (props) => {
  const { navigation } = props;
  const favs = useSelector(state => state.meals.favoriteMeals);

  navigation.setOptions({
    headerLeft: () => {
      return (
        <MenuButton 
          title='toggle drawer'
          iconName='ios-menu'
          navigation={navigation}
        />
      )
    },
    
  })

  if( favs.length < 1 ) {
    return (
      <View style={styles.initialMessageContainer}>
        <Titles style={styles.initialMessage}>Add a favourite meal!</Titles>
      </View>
    )
  }

  return <MealList 
    listData={favs}
    navigation={props.navigation}
    />
}

const styles = StyleSheet.create({
  initialMessageContainer: {
    borderColor: 'red',
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialMessage: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  }
})

export default FavoritesScreen;

