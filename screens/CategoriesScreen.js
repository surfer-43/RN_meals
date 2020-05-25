import React from 'react';
import { 
  View,
  FlatList,
  StyleSheet
} from 'react-native'

// getting fake data
import Categories from '../data/dummy-data';

const CategoriesScreen = (props) => {
  console.log("CategoriesScreen props: ", props);

  renderGridItem = (itemData) => {
    return (
      <View>
        <Text>itemData.item.title</Text>
      </View>
    )
  }

  return (
    <View style={styles.screen}>
      <FlatList 
        numColumns={2}
        data={Categories}
        renderItem={renderGridItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
      borderWidth: 1,
      borderColor: 'red',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  }
});

export default CategoriesScreen;
