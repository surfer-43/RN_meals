import React from 'react'
import { 
  Text,
  StyleSheet, 
} from 'react-native'

const DefaultText = (props) => {
  return (
    <Text style={{...styles.baseTextStyle, ...props.style}}>{props.children}</Text>
  )
}

const styles = StyleSheet.create({
  baseTextStyle: {
    fontFamily: 'open-sans',
    fontSize: 14
  }
})

export default DefaultText

