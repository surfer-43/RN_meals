import React from 'react';
import MealList from '../components/MealList';

import MenuButton from '../components/MenuButton';

// get data
import { CATEGORIES } from '../data/dummy-data';
import { MEALS } from '../data/meals';
console.log("these are the meals: ", MEALS);
const catId = 'c1';
// setting up fake favs
const favs = MEALS.filter( meal => {
  return meal.categoryIds.indexOf(catId) >= 0;
})
const FavoritesScreen = (props) => {
  const { navigation } = props;

  navigation.setOptions({
    headerLeft: () => {
      return (
        <MenuButton 
          title='toggle drawer'
          iconName='ios-menu'
          navigation={navigation}
        />
      )
    }
  })

  return <MealList 
    category={catId}
    listData={favs}
    navigation={props.navigation}
    />
}


export default FavoritesScreen;

