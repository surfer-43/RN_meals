import React from 'react';
import { 
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import CategoryGridTyle from '../components/CategoryGridTile';

// getting fake data
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = (props) => {

  renderGridItem = (itemData) => {
    const { item } = itemData
    return (
      <CategoryGridTyle 
        data={item} 
        onSelect={() => {
        props.navigation.navigate(
          {
            name:'CategoryMealsScreen',
            params: { catId: item.id }
          })
        }}
      />
    )
  }

  return (
    <View style={styles.screen}>
      <FlatList 
        style={styles.grid}
        numColumns={2}
        horizontal={false}
        data={CATEGORIES}
        renderItem={renderGridItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

console.log("all info about CategoriesScreen: ", CategoriesScreen);
// adding roperties to the CategoriesScreen
CategoriesScreen.navigationOptions = {
  headerTitle: "bang"
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    width: '100%'
  },
});

export default CategoriesScreen;
