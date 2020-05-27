import React from 'react';

import { CATEGORIES } from '../data/dummy-data';
import { MEALS } from '../data/meals';

import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
  const catId = props.route.params.catId;
  const cat = CATEGORIES.find( (cat) => {
    return cat.id === catId
  } );
  const selectedMeals = MEALS.filter( meal => {
    return meal.categoryIds.indexOf(catId) >= 0;
  } );


  return (
    <MealList 
      category={cat}
      listData={selectedMeals}
      navigation={props.navigation}
    />
  )
}

export default CategoryMealsScreen;