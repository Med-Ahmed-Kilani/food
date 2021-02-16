import React, {useState} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const RestaurantDetails = ({ result }) => {
    return<View style={{paddingStart:10}}>
        <Image style={styles.imageStyle} source={{uri:result.image_url}} />
        <Text style={styles.nameStyle} > {result.name}</Text>
        <Text>{result.rating} stars, {result.review_count} reviews</Text>
    </View>
}

const styles = StyleSheet.create({
    imageStyle:{
        height:150,
        width:250,
        marginVertical:10,
    }, 
    nameStyle:{
        fontWeight:'bold',
    },
})

export default RestaurantDetails
