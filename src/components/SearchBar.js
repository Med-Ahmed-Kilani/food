import React from 'react'
import {Text, StyleSheet, TextInput, View} from 'react-native' 
import { Feather } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {

    return <View style={{backgroundColor:'#FFF'}}>
        <View style={styles.container}>
            <Feather style={styles.icon} name='search' />
            <TextInput 
                style={styles.input} 
                placeholder='Search' 
                autoFocus={true} 
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={(value)=>{onTermChange(value)}} 
                onEndEditing={onTermSubmit}
            />
        </View>
    </View>
    
}

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        height:50,
        width:'90%',
        backgroundColor:'#E1DDDD',
        borderRadius:20,
        marginHorizontal:'5%',
        marginVertical:10,
        alignItems:'center'
    },
    icon:{
        marginHorizontal:10,
        fontSize:25
    },
    input:{
        fontSize:20,
        flex:1,
        marginRight:3
    }
})

export default SearchBar
