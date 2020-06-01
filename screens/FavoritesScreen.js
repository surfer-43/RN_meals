import React from 'react';
import { useSelector } from 'react-redux'
import MealList from '../components/MealList';

import MenuButton from '../components/MenuButton';

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

  return <MealList 
    category={catId}
    listData={favs}
    navigation={props.navigation}
    />
}


export default FavoritesScreen;

