import React from 'react';
import { 
    Text, 
    View,
    Button,
    StyleSheet, 
} from 'react-native';

const CategoryMealsScreen = (props) => {
    console.log("CategoyMealsScreen props: ", props);
    return (
        <View>
            <Text>Meals Categories</Text>
            <Button 
                title="go to Details!" 
                onPress={() => { 
                    props.navigation.navigate({name: 'MealDetailsScreen'})
                }
            }/>
            <Button 
                title="go back!" 
                onPress={() => { 
                    props.navigation.goBack()
                }
            }/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default CategoryMealsScreen;

