import React from 'react';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';

import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
  const catId = props.route.params.catId;

  const availableMeals = useSelector( state => state.meals.filteredMeals )

  const cat = CATEGORIES.find( (cat) => {
    return cat.id === catId
  } );
  const selectedMeals = availableMeals.filter( meal => {
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