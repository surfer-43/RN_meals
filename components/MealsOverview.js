import React from 'react'
import { StyleSheet, View } from 'react-native'

import DefaultText from './DefaultText';

const MealsOverview = (props) => {
  const { duration, complexity, affordability } = props;

  return (
    <View style={{...styles.itemRow, ...styles.mealDescription}}>
      <DefaultText >{duration} (mins)</DefaultText>
      <DefaultText>{complexity.toUpperCase()}</DefaultText>
      <DefaultText>{affordability.toUpperCase()}</DefaultText>
    </View>
  )
}

const styles = StyleSheet.create({
  itemRow: {
    flexDirection: 'row'
  },
  mealDescription: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

})

export default MealsOverview

