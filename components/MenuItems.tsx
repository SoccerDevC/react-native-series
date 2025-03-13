import {View, Text, ScrollView, StyleSheet} from 'react-native'
import React from 'react'

const menuItemsToDisplay = [
    'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
  ];

const MenuItems = () => {
    return(
        <View style = {styles.container}>
            <ScrollView indicatorStyle='white' style = {styles.scrollView}>
                <Text style = {styles.heading}>
                    View Menu
                </Text>
                <Text style = {styles.scrollText}>{menuItemsToDisplay[0]}</Text>
            </ScrollView>
        </View>
    );
}

export default MenuItems

const styles = StyleSheet.create({
    container:{flex:1},
    scrollView:{
        paddingHorizontal:40,
        paddingVertical:40,
        backgroundColor:'black'
    },
    scrollText:{
        color:'#F4CE14',
        fontSize:36
    },
    heading:{
        color:'white',
        fontSize:40,
        flexWrap:'wrap'
    }
})