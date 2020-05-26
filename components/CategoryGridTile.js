import React from 'react'
import {  
  Text, 
  View, 
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native'

const CategoryGridTile = (props) => {
  const { data } = props;
  let TouchableCmpt = TouchableOpacity;
  if(Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmpt = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCmpt onPress={props.onSelect}
        style={styles.touchableCpmt}
      >
        <View style={{...styles.tile, ...{backgroundColor: data.color}}}>
          <Text 
            style={styles.title}
            numberOfLines={2}
          >{data.title}</Text>
        </View>
      </TouchableCmpt>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem:{
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  touchableCpmt: {
    flex: 1
  },
  tile: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: { width: 0, height: 2},
    elevation: 3,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    textAlign: "center"
  }
})

export default CategoryGridTile

