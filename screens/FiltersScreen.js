import React, 
{ useState, useCallback, useEffect } from 'react';
import { 
  Text,
  View,
  Switch,
  Platform,
  StyleSheet,
} from 'react-native';
import MenuButton from '../components/MenuButton';
import Titles from '../components/Titles';
import DefaultText from '../components/DefaultText';

import * as filters from '../data/filters';
import Colors from '../constants/colors';

// different way to make a component if only used in this file.
const FilterSwitch = ( props ) => {
  return (
    <View style={styles.filterRow}>
      <DefaultText style={styles.filter}>{props.name}</DefaultText>
      <Switch 
        trackColor={{ true: Colors.primaryColor}}
        thumbColor= {Platform.OS === 'andriod' ? Colors.primaryColor : ''}
        value={props.state} 
        onValueChange={props.onChange}
        />
    </View>
  )
}

const FiltersScreen = (props) => {
  const { navigation, route } = props;
  const [ isGlutenFree, setIsGlutenFree ] = useState(false);
  const [ isVegan, setIsVegan ] = useState(false);
  const [ isVegitarian, setIsVegitarian ] = useState(false);
  const [ isLactoseFree, setIsLactoseFree] = useState(false);
  const [ totalFilters, setTotalFilters ] = useState() 

  navigation.setOptions({
    headerLeft: () => {
      return (
        <MenuButton 
          title='toggle drawer'
          iconName='ios-menu'
          pressed={() => {
            console.log("toggle was pressed");
            navigation.toggleDrawer()
          }}
        />
      )
    },
    headerRight: () => {
      return (
        <MenuButton 
          title='save'
          iconName='ios-save'
          pressed={ () => { console.log('looking for the totalfilters on press obj: ', totalFilters)} }
        />
      )
    }
  });

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      vegan: isVegan,
      vegitarian: isVegitarian,
      lactoseFree: isLactoseFree,
    }
    console.log("applied filters: ", appliedFilters);
  }, [ isGlutenFree, isVegan, isVegitarian, isLactoseFree ])

  useEffect(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      vegan: isVegan,
      vegitarian: isVegitarian,
      lactoseFree: isLactoseFree,
    }
    setTotalFilters(appliedFilters);
  }, [ isGlutenFree, isVegan, isVegitarian, isLactoseFree ])

  return (
    <View>
      <Titles>
        <Text style={styles.title}>Available Filters / Restrictions</Text>
      </Titles>
      <View style={styles.filterContainer}>
      <FilterSwitch 
          name={'Gluten Free'}
          state={isGlutenFree}
          onChange={(newValue) => {setIsGlutenFree((newValue))}}
        />
        <FilterSwitch 
          name={'Vegan'}
          state={isVegan}
          onChange={(newValue) => {setIsVegan((newValue))}}
        />
        <FilterSwitch 
          name={'Vegitarian'}
          state={isVegitarian}
          onChange={(newValue) => {setIsVegitarian((newValue))}}
        />
        <FilterSwitch 
          name={'Lactose Free'}
          state={isLactoseFree}
          onChange={(newValue) => {setIsLactoseFree((newValue))}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: 'red'
  },
  filterContainer: {

  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  filter: {
    fontSize: 16
  }
});

export default FiltersScreen;

