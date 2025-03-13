import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
export default function LittleLemonHeader(){
    return(
        <View
        style = {styles.container}
        >
            <Text numberOfLines={3} style ={styles.innerText} >
                Little Lemon
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#EE9972'
    },
    innerText:{
        color:'black',
        padding:40,
        fontSize:30,
        textAlign:'center',
        paddingBottom:2
    }
})