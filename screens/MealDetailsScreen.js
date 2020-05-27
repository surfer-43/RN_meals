import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';
import { 
  HeaderButtons, 
  Item
} from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton';

import { MEALS } from '../data/meals';

const MealDetailsScreen = (props) => {
  const { mealId } = props.route.params;
  
  const mealDetails = MEALS.filter( meal => meal.id === mealId );

  // setting title of screen
  props.navigation.setOptions({ 
    title: mealDetails[0].title,
    headerRight: () => { 
      return (
        <HeaderButtons
          HeaderButtonComponent={CustomHeaderButton}
        >
        <Item 
          title='favourite' 
          iconName='ios-star'
          onPress={() => {
              console.log('mark as favourite...');
          }}/>
          {/**
            can add more than 1 icon if required
           */}
        {/* <Item 
          title='superFavs' 
          iconName='ios-star-outline'
          onPress={() => {
              console.log('mark as favourite...');
          }}/> */}
        </HeaderButtons>
      )
    }
  }); 

  return (
    <View>
      <Text>Meal Details screen</Text>
      <Button 
        title='go back to Categories'
        onPress={() => {
          // props.navigation.navigate({name: 'CategoriesScreen'});
          props.navigation.popToTop();
        }
      } />
    </View>
  )
}

const styles = StyleSheet.create({});

export default MealDetailsScreen;

