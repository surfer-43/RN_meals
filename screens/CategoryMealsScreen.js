import React from 'react';
import { 
    Text, 
    View,
    Button,
    StyleSheet, 
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {

    const catId = props.route.params.catId;
    const cat = CATEGORIES.find( (cat) => cat.id === catId );

    /**
     * this seems ike a future hook to get titles for each 
     * screen in the app
     */
    props.navigation.setOptions({ title: cat.title });

    return (
        <View>
            <Text>Meals Category: {cat.title}</Text>
            <Button 
                title="go to Details!" 
                onPress={() => { 
                    props.navigation.navigate('MealDetailsScreen',
                    {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    })
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

