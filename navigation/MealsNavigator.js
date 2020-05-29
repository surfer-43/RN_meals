import React from 'react';
import { 
  Text, 
  Platform 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/colors';
import HeaderStyles from '../constants/headerStyles';

const Meals = createStackNavigator();
const Favs = createStackNavigator();
const Filters = createStackNavigator();
const Main = createDrawerNavigator();
const Tabs = Platform.OS === "android"? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : "white",
  },
  headerTintColor:  Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const MealsNavigator = () => {
  return (
    <Meals.Navigator 
      initialRouteName="CategoriesScreen"
      screenOptions={ defaultNavOptions }

    >
      <Meals.Screen 
        name="CategoriesScreen" 
        component={CategoriesScreen} 
        options={{
          title: 'Meal Categories',
          ...HeaderStyles
        }}
      />
      <Meals.Screen 
        name="CategoryMealsScreen" 
        component={CategoryMealsScreen} 
        options={{
          title: 'Meal Screen',
          ...HeaderStyles
        }}
      />
      <Meals.Screen 
        name="MealDetailsScreen" 
        component={MealDetailsScreen} 
        options={{
          title: 'Details Screen',
          ...HeaderStyles
        }}
      />
    </Meals.Navigator>
  )
}

const FavsNavigator = () => {
  return (
    <Favs.Navigator
      initialRouteName="CategoriesScreen"
      screenOptions={ defaultNavOptions }
    >
      <Favs.Screen 
        name="Favorite Meals" 
        component={FavoritesScreen} 
        options={{ 
          ...HeaderStyles 
        }}
      />
      <Favs.Screen 
        name="MealDetailsScreen" 
        component={MealDetailsScreen} 
        options={{ 
          ...HeaderStyles 
        }}
      />
    </Favs.Navigator>
  )
}

const FiltersNavigator = () => {
  return (
    <Filters.Navigator 
      initialRouteName="FiltersScreen"
      screenOptions={ defaultNavOptions }
    >
      <Filters.Screen 
        name="Filter Meals"
        component={FiltersScreen}
        options={{
          ...HeaderStyles
        }}
      />
    </Filters.Navigator>
  )
}

const TabsNavigator = () => {
  return (
      <Tabs.Navigator
        shifting={true}
        // barStyle={{ backgroundColor: Colors.androidTabColor }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Meals') {
              iconName = focused
                ? 'ios-restaurant'
                : 'ios-restaurant';
            } else if (route.name === 'Favs') {
              iconName = focused ? 'ios-star' : 'ios-star-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.highlightColor,
          inactiveTintColor: 'gray',
          labelStyle: {
            fontFamily: 'open-sans-bold',
            fontSize: 14
          }
        }}
        activeColor={Colors.highlightColor}
        inactiveColor= 'grey'

      >
        <Tabs.Screen 
          name='Meals' 
          component={MealsNavigator}
          options={{
            tabBarColor: Colors.secondaryColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans'}}>Meals!!</Text> : 'meals',
          }}
        />
        <Tabs.Screen 
          name="Favs" 
          component={FavsNavigator} 
          options={{
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans'}}>FAVORITES!!</Text> : 'favs',
            tabBarColor: Colors.androidColor,
          }}
        />
      </Tabs.Navigator>
  )
}

const MainNavigator = () => {
  return(
    <NavigationContainer>
      <Main.Navigator 
        initialRouteName="CategoriesScreen"
        drawerContentOptions={{
          activeTintColor: Colors.secondaryColor,
          activeBackgroundColor: Colors.activeColor,
          itemStyle: {
            fontFamily: 'open-sans-bold',
            borderWidth: 1,
            borderColor: "black"
          },
          labelStyle: {
            fontFamily: 'open-sans-bold',
            fontSize: 18,
            color: Colors.highlightColor
          }
        }}
      >
        <Main.Screen 
          name="CategoriesScreen"
          component={TabsNavigator}
          options={{
            drawerLabel: 'Meal Categories'
          }}
        />
        <Main.Screen 
          name="FilterScreen"
          component={FiltersNavigator}
          options={{
            drawerLabel: 'Meal Filters'
          }}
        />
      </Main.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator;