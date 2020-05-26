import React from 'react';
import { 
    Text, 
    View,
    Button,
    FlatList,
    StyleSheet, 
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import { MEALS } from '../data/meals';

import MealListItem from '../components/MealListItem';

const CategoryMealsScreen = (props) => {
  const catId = props.route.params.catId;
  const cat = CATEGORIES.find( (cat) => cat.id === catId );
  const selectedMeals = MEALS.filter( meal => {
    return meal.categoryIds.indexOf(catId) >= 0;
  } );

  const renderListItem = ( itemData ) => {
  /**
   * this seems ike a future hook to get titles for each 
   * screen in the app
   */
  props.navigation.setOptions({ title: cat.title });

    return (
      <MealListItem 
        data={itemData.item} 
        selectMeal={()=> {
          props.navigation.navigate(
            'MealDetailsScreen',
            {
              mealId: itemData.item.id,
              otherParam: 'anything you want here',
            }
          )}
        }
      />
    )
  }

  return (
    <View style={styles.screen}>
      <FlatList 
        style={styles.list}
        numColumns={1}
        data={selectedMeals}
        renderItem={renderListItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10
  },
  list: {
    width: "100%"
  }
});

export default CategoryMealsScreen;

/**
 *       <Button 
        title="go to Details!" 
        onPress={() => { 
          props.navigation.navigate('MealDetailsScreen',
          {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      }/>
      <Button 
        title="go back!" 
        onPress={() => { 
          props.navigation.goBack()
        }
      }/>
 */