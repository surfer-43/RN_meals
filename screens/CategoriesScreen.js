import React from 'react';
import { 
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

// getting fake data
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = (props) => {

  renderGridItem = (itemData) => {
    return (
      <TouchableOpacity onPress={() => {
        props.navigation.navigate(
          {name:'CategoryMealsScreen',
          params: { catId: itemData.item.id }
          })
      }}
        style={styles.gridItem}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
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
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    borderWidth: 1,
    borderColor: 'red',
    width: '100%'
  },
  gridItem:{
    borderColor: "purple",
    borderWidth:1,
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;
