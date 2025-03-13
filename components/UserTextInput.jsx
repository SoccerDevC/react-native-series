import { ScrollView,TextInput, StyleSheet, View, Text, Platform, KeyboardAvoidingView  } from "react-native";
import React, { useState}  from 'react'

const UserTextInput = () => {
    const [firstName, onChangeFirstName] = useState('')
    const [lastName, onChangeLastName] = useState('')
    const [phoneNumber, onChangePhoneNumber] = useState('')
    const[feedback, onChangeFeedback] =useState('')

    return(
        <KeyboardAvoidingView
        style = {styles.container}
        behavior = {Platform.OS === "ios" ? 'padding' : 'position'}
        >
            <ScrollView 
            keyboardDismissMode = 'on-drag'
            >
                <View style = {styles.headerView}>
                    <Text style = {styles.headerText}>Welcome To Little</Text> 
                    <Text style = {styles.headerText}>Lemon</Text>
                </View>
                <Text style = {styles.mainContent}>Little Lemon Is built on the trust and integrity of the community and it values your trusted feedback as regards to the services it offers to you all. Thank You!!!
                </Text>
                <View>
                    <TextInput 
                    style = {styles.input}
                    value = {firstName}
                    onChangeText = {onChangeFirstName}
                    placeholder={"Enter First Name"}
                    />
                    <TextInput 
                    style = {styles.input}
                    value = {lastName}
                    onChangeText = {onChangeLastName}
                    placeholder={"Enter Last Name"}
                    />
                    <TextInput 
                    style = {styles.input}
                    value = {phoneNumber}
                    onChangeText = {onChangePhoneNumber}
                    placeholder={"Enter Phone Number"}
                    keyboardType="number-pad"
                    />
                    <TextInput 
                    style = {styles.feedback}
                    value = {feedback}
                    onChangeText = {onChangeFeedback}
                    placeholder={"Enter Feedback"}
                    multiline = {true}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default  UserTextInput;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    mainContent:{
        padding:20,
        fontSize:25,
        textAlign:'center'
    },
    input:{
        borderRadius:20,
        borderWidth:1,
        backgroundColor:'yellow',
        color:'black',
        height:50,
        margin:10,
        fontSize:20,
        fontStyle:'italic'
    },
    feedback:{
        borderRadius:20,
        borderWidth:1,
        backgroundColor:'yellow',
        color:'black',
        height:200,
        margin:10,
        fontSize:20,
        fontStyle:'italic'
    },
    headerView:{
        flex:0.3,
        backgroundColor:'grey',
        paddingTop:30

    },
    headerText:{
        fontSize:30,
        textAlign:'center',
    }
})