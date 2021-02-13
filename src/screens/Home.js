import React, { useState } from 'react'
import {Text, StyleSheet, View} from 'react-native' 
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp'

const Home = () => {
    const [term, setTerm] = useState('')
    const [restaurants, setRestaurants] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async ( ) => {
        try {
            const getRespond = await yelp.get('/search',{
                params:{
                    limit:50,
                    term,
                    location:'san jose'}
            })
            setRestaurants(getRespond.data.businesses) 
            setErrorMessage('')   
        } catch (error) {
            setErrorMessage('Something went wrong!')
        }
        
    }

    return<View>
        <SearchBar 
            onTermChange={(term)=>{setTerm(term)}} 
            onTermSubmit={searchApi}
        />
        {errorMessage? <Text>{errorMessage}</Text> :<Text>We have found {restaurants.length} restaurants</Text>}
    </View>
}

const styles = StyleSheet.create({
    container : {},
})

export default Home
