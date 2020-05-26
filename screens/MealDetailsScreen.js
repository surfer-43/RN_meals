import React from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
} from 'react-native';

import { MEALS } from '../data/meals';

const MealDetailsScreen = (props) => {
    console.log("Meals details screen - props: ", props.route.params);
    const { mealId } = props.route.params;
    
    const mealDetails = MEALS.filter( meal => meal.id === mealId );
    console.log('this is the meal we want: ', mealDetails)

    // setting title of screen
    console.log("this is the meal title: ", mealDetails.title);
    props.navigation.setOptions({ title: mealDetails[0].title }); 

    return (
        <View>
            <Text>Meal Details screen</Text>
            <Button 
                title='go back to Categories'
                onPress={() => {
                    // props.navigation.navigate({name: 'CategoriesScreen'});
                    props.navigation.popToTop();
                }
            } />
        </View>
    )
}

const styles = StyleSheet.create({});

export default MealDetailsScreen;

