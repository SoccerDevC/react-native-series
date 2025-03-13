import {ScrollView, Text,  TextInput, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native'
import React, { useState } from  'react'

const GetText = () => {
    const [userName, onChangeTextName] = useState('')
    
    return (
        <KeyboardAvoidingView 
        style = {styles.container}
        behavior = {Platform.OS === 'ios'? 'padding' : 'height'}
        >
            <ScrollView 
            keyboardDismissMode='on-drag'
            >
                <Text style = {styles.feedbackText}>
                    We are requesting to get to know your name for purposes of self tracking the user of our beloved application
                </Text>
                <TextInput
                    style = {styles.textInput}
                    value= {userName}
                    placeholder='Conrad'
                    onChangeText={onChangeTextName}
                />
            
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    feedbackText:{
        paddingVertical:30,
        fontSize:25,
        color: 'white',
        textAlign:'center',
        paddingHorizontal:10
    },
    container:{
        flex:1,
        margin:40,
        backgroundColor:'grey',
        borderRadius:10
    },
    textInput:{
        height:70,
        backgroundColor:'white',
        color:'black',
        fontSize:18,
        marginHorizontal:20,
        paddingHorizontal:20,
        borderRadius:10
    }
})

export default GetText