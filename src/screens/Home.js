import React, { useState } from 'react'
import {Text, StyleSheet, View, ScrollView} from 'react-native' 
import SearchBar from '../components/SearchBar'
import useRestaurants from '../hooks/useRestaurants'
import RestaurantsList from '../components/RestaurantsList'

const Home = () => {
    const [term, setTerm] = useState('')
    const [errorMessage, restaurants, searchApi] = useRestaurants()

    const filterResultByPrice = (price) =>{
        return restaurants.filter(result => {
            return result.price === price
        })
    }

    return<View style={{flex:1}}>
        <SearchBar 
            term={term}
            onTermChange={setTerm} 
            onTermSubmit={()=>{searchApi(term)}}
        />
        {errorMessage? <Text>{errorMessage}</Text> : null }
        <ScrollView>
            <RestaurantsList results={filterResultByPrice('$')} title='Cost effective' />
            <RestaurantsList results={filterResultByPrice('$$')} title='Bit pricier' />
            <RestaurantsList results={filterResultByPrice('$$$')} title='Big spender' />
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    container : {},
})

export default Home
