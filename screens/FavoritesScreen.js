import React from 'react';
import MealList from '../components/MealList';

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
  console.log("this is the category we want: ", catId);
  console.log("these are the meals we will use: ", favs);
  return <MealList 
    category={catId}
    listData={favs}
    navigation={props.navigation}
    />
}


export default FavoritesScreen;

