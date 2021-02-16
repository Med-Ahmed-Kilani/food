import React, {useEffect, useState} from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import yelp from '../api/yelp'
import { Entypo } from '@expo/vector-icons'

const RestaurantShow = ({route}) => {
    const [result, setResult] = useState({})
    const id = route.params.id
    const getResult = async (id) =>{
        const response = await yelp.get(`/${id}`)
        setResult(response.data) 
    }
    useEffect(()=>{
        getResult(id)
    }, [])

    if (!result){
        return null
    }

    return<>
            <Text style={{alignSelf:'center', marginVertical:5}} >{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo)=>photo}
                renderItem={ ({item}) => {
                    return<View style={styles.container}>
                        <Image style={styles.image} source={{uri:item}} />
                    </View>
                } }
            />
        </>
}

const styles = StyleSheet.create({
    image:{
        height:150,
        width:250,
        marginVertical:10,
    },  
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-evenly',
    }
})

export default RestaurantShow
