import React from 'react'
import {
    Text, 
    View,
    StyleSheet, } from 'react-native'

const Titles = (props) => {
    return (
        <View>
            <Text style={{...styles.title, ...props.style}}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    }
})

export default Titles

