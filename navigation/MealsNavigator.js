// import { createStackNavigator } from '@react-navigation/stack';
// import React from 'react';
// // import the different screens we want to go between
// import CategoriesScreen from '../screens/CategoriesScreen';
// import CategoryMealsScreen from '../screens/CategoryMealsScreen';
// import MealDetailsScreen from '../screens/MealDetailsScreen';

// /**
//  * 2 different ways to create pointers to the screens we require
//  * if you pass an {}, it allows for additional options to be set 
//  * when the navigator loads that screen
//  */
// // const MealsNavigator = createStackNavigator({
// //   Categories: CategoriesScreen,
// //   CategoryMeals: {
// //     screen: CategoryMealsScreen
// //   },
// //   MealDetails: MealDetailsScreen
// // });

// const MealsNavigator = createStackNavigator();

// const MealsNavigation = () => {
//   return (
//     <MealsNavigator.Navigator>
//       <MealsNavigator.Screen name='CategoriesScreen' component={CategoriesScreen}/>
//       <MealsNavigator.Screen name='CategoryMealsScreen' component={CategoryMealsScreen}/>
//       <MealsNavigator.Screen name='MealDetailsScreen' component={MealDetailsScreen}/>
//     </MealsNavigator.Navigator>
//   )
// }

// export default MealsNavigation;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

const Stack = createStackNavigator();

const MealsNavigator = (props) => {
  console.log('MealsNavigator - are there props: ', props);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CategoriesScreen">
        <Stack.Screen 
        name="CategoriesScreen" 
        component={CategoriesScreen} 
        options={{
          title: 'Category Screen'
        }}
        />
        <Stack.Screen 
        name="CategoryMealsScreen" 
        component={CategoryMealsScreen} 
        options={{
          title: 'Meal Screen'
        }}
        />
        <Stack.Screen 
        name="MealDetailsScreen" 
        component={MealDetailsScreen} 
        options={{
          title: 'Details Screen'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MealsNavigator;