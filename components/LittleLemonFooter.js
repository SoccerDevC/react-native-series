import {View, Text, StyleSheet} from 'react-native'
import * as React from 'react'

const LittleLemonFooter = () => {
    return(
        <View style = {styles.view}>
            <Text style = {styles.text}>All rights reserved by Little Lemon, 2022{' '}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        backgroundColor: '#EE9972',
        marginBottom:10
    },
    text:{
        textAlign: "center",
        fontWeight:'bold',
        fontSize:16,
        fontStyle:'italic'
    }
});
export default LittleLemonFooter