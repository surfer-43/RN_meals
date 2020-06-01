import React from 'react'
import { 
  FlatList,
  View,
  StyleSheet,
} from 'react-native';
import MealListItem from './MealListItem';

const MealList = (props) => {
  const { category, listData, navigation } = props;
  const renderListItem = ( itemData ) => {  
    return (
      <MealListItem 
        data={itemData.item} 
        selectMeal={()=> {
          navigation.navigate(
            'MealDetailsScreen',
            {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
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

