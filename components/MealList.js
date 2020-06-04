import React from 'react'
import { 
  FlatList,
  View,
  StyleSheet,
} from 'react-native';
import MealListItem from './MealListItem';
import { useSelector } from 'react-redux';

const MealList = (props) => {
  const { category, listData, navigation } = props;
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
  const renderListItem = ( itemData ) => {  
    const isFav = favoriteMeals.find( meal => meal.id === itemData.item.id);
    return (
      <MealListItem 
        data={itemData.item} 
        selectMeal={()=> {
          navigation.navigate(
            'MealDetailsScreen',
            {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isFav
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
        data={listData}
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

export default MealList;

