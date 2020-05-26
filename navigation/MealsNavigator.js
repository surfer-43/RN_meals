import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import Colors from '../constants/colors';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const MealsNavigator = (props) => {
  return (
    <Stack.Navigator 
      initialRouteName="CategoriesScreen"
      screenOptions={{headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : "white",
        },
        headerTintColor:  Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },}}
    >
      <Stack.Screen 
      name="CategoriesScreen" 
      component={CategoriesScreen} 
      options={{
        title: 'Meal Categories',
      }}
      />
      <Stack.Screen 
      name="CategoryMealsScreen" 
      component={CategoryMealsScreen} 
      options={{
        title: 'Meal Screen',
      }}
      />
      <Stack.Screen 
      name="MealDetailsScreen" 
      component={MealDetailsScreen} 
      options={{
        title: 'Details Screen',
      }}
      />
    </Stack.Navigator>
  )
}

const TabsNavigator = (props) => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            console.log('color value: ', color);
            let iconName;

            if (route.name === 'Meals') {
              console.log("we are working with the meals tab");
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Favs') {
              console.log("we are dealing with the favourites tab styles")
              iconName = focused ? 'ios-star-outline' : 'ios-star';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={23} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tabs.Screen name='Meals' component={MealsNavigator} />
        <Tabs.Screen name="Favs" component={FavoritesScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default TabsNavigator;