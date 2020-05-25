import React from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
} from 'react-native';

const MealDetailsScreen = (props) => {
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

