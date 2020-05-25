import React from 'react';
import { 
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native'

const CategoriesScreen = (props) => {
    console.log("CategoriesScreen props: ", props);
    return (
        <View style={styles.screen}>
            <Text>The Categories Screen</Text>
            <Button 
                title="go to Meals!" 
                onPress={() => { 
                    console.log('we clicked on the button') 
                    props.navigation.navigate({name: 'CategoryMealsScreen'})
                }
            }/>
            <Button 
                title="go to Meals no going back!" 
                onPress={() => { 
                    props.navigation.replace('CategoryMealsScreen')
                }
            }/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoriesScreen;
