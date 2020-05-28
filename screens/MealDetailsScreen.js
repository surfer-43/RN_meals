import React from 'react';
import {
  Text,
  Image,
  ScrollView,
  View,
  Button,
  StyleSheet,
} from 'react-native';
import { 
  HeaderButtons, 
  Item
} from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton';
import MealsOverview from '../components/MealsOverview';
import DefaultText from '../components/DefaultText'

import { MEALS } from '../data/meals';

const MealDetailsScreen = (props) => {
  const { mealId } = props.route.params;
  const mealDetails = MEALS.filter( meal => meal.id === mealId );
  const { 
    duration,
    complexity,
    affordability,
    imageUrl,
    ingredients,
    steps
  } = mealDetails[0]

  console.log('this is the meal: ', mealDetails[0]);
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

  const renderListElm = ( elm, i ) => {
    return <DefaultText key={i} style={styles.listItem}>{elm}</DefaultText>
  }

  return (
    <ScrollView>
      <View>
        <Image source={{uri: imageUrl}} style={styles.mealImage}/>
        <MealsOverview 
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Ingredients</Text>
          <View style={styles.listContainer}>
            {ingredients.map(( ingredient, index ) => {
                console.log('what is the ingredient: ', ingredient);
                return renderListElm(ingredient, index)
              }
            )}
          </View>
          <Text style={styles.title}>Steps</Text>
          <View style={styles.listContainer}>
            {steps.map(( step, index ) => {
                return renderListElm(step, index)
              }
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mealImage: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },
  content: {
    padding: 10
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 16
  },
  regular: {
    fontFamily: 'open-sans',
    fontSize: 12
  },
  listContainer: {
    marginVertical: 10,
  },
  listItem: {
    marginVertical: 5,
    marginHorizontal: 20
  }
});

export default MealDetailsScreen;

