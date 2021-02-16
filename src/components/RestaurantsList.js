import React from 'react'
import {Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native' 
import RestaurantDetails from './RestaurantDetails'
import { withNavigation } from 'react-navigation';

const RestaurantsList = ({title, results, navigation}) => {

    if (!results.length) {
        return null
    }


    return<View style={styles.container} >
        <Text style={styles.title} >{title}</Text>
        <FlatList
            data={results}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(result)=>result.id}
            horizontal={true}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity onPress={()=>navigation.navigate('details', {id: item.id})}>
                        <RestaurantDetails result={item}/>
                    </TouchableOpacity>
                )
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container : {
        height:235,
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

export default withNavigation(RestaurantsList)
