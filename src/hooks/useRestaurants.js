import React, { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default()=>{
    const [restaurants, setRestaurants] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async pasta => {
        console.log('pizza')
        try {
            const getRespond = await yelp.get('/search',{
                params:{
                    limit:50,
                    term:pasta,
                    location:'san jose'}
            })
            setRestaurants(getRespond.data.businesses) 
            setErrorMessage('')   
        } catch (error) {
            setErrorMessage('Something went wrong!')
        }
        
    }

    useEffect(()=>{
        searchApi('pasta');
    },[])

    return [errorMessage, restaurants, searchApi]
}