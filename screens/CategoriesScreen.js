import React from 'react';
import { 
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import CategoryGridTyle from '../components/CategoryGridTile';
import MenuButton from '../components/MenuButton';

// getting fake data
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = (props) => {
  const { navigation } = props;

  navigation.setOptions({
    headerLeft: () => {
      return (
        <MenuButton
          style={{color: 'white'}} 
          title='toggle drawer'
          iconName='ios-menu'
          navigation={navigation}
        />
      )
    }
  })

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
