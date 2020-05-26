import React from 'react'
import { 
  Text,
  View,
  ImageBackground, 
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native';

import Colors from '../constants/colors';

const MealListItem = (props) => {
  const { 
    title, 
    imageUrl,
    duration, 
    complexity, 
    affordability
   } = props.data;
  const { selectMeal } = props

  let Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <View style={styles.listContainer}>
      <Touchable
        style={styles.listBtn}
        onPress={selectMeal}
      >
        <View style={styles.listElm}>
          <View style={{...styles.itemRow, ...styles.mealHeader}}>
            <ImageBackground source={{uri: imageUrl}} style={styles.mealImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.mealTitle} numberOfLines={1}>{title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{...styles.itemRow, ...styles.mealDescription}}>
            <Text>{duration} (mins)</Text>
            <Text>{complexity.toUpperCase()}</Text>
            <Text>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Touchable>
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    height: 200,
    width: '100%',
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: 'hidden',
  },
  listBtn: {
    flex: 1
  },
  listElm: {
    flex: 1,
    borderColor: Colors.primaryColor,
  }, 
  itemRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: "85%",
    // paddingHorizontal: 10,
    justifyContent: 'flex-start',
  },
  mealDescription: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mealImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, .3)',
    padding: 10,
  },
  mealTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    color: 'white',
    textAlign: 'center'
  },
})

export default MealListItem

