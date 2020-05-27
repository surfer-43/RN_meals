import React from 'react';
import { 
  Text,
  View,
  StyleSheet,
} from 'react-native';
import MenuButton from '../components/MenuButton';

const FiltersScreen = (props) => {
  const { navigation } = props;

  navigation.setOptions({
    headerLeft: () => {
      return (
        <MenuButton 
          title='toggle drawer'
          iconName='ios-menu'
          navigation={navigation}
        />
      )
    }
  });

  return (
    <View>
      <Text>Filters will go here</Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default FiltersScreen;

