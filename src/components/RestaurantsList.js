import React from 'react'
import {Text, StyleSheet, View, FlatList} from 'react-native' 
import RestaurantDetails from './RestaurantDetails'

const RestaurantsList = ({title, results}) => {
    return<View style={styles.container} >
        <Text style={styles.title} >{title}</Text>
        <FlatList
            data={results}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(result)=>result.id}
            horizontal={true}
            renderItem={({item})=>{
                return<RestaurantDetails result={item} />
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container : {
        height:260
    },
    title: {
        fontSize: 18, 
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    list:{
        flexDirection: 'row',
        flex:1,
    }
})

export default RestaurantsList
