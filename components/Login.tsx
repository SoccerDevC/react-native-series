import{
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform

} from 'react-native'
import React, {useState} from 'react'

const Login = () => {
    const [ emailAddress, onChangeEmail] = useState('')
    const [password, onChangePassword] = useState('')

    return(
        <KeyboardAvoidingView 
            style = {styles.loginContainer}
            behavior={ Platform.OS === 'ios' ? 'padding' : 'position'}
        >
            <ScrollView  keyboardDismissMode='on-drag'>
                <Text style = {styles.innerText}>Welcome To Little</Text>
                <Text style = { styles.innerText}>Lemon</Text>
                <Text style = { styles.continue}>Login To Continue</Text>
                <TextInput
                    style = {styles.loginInput}
                    value = {emailAddress}
                    onChangeText={onChangeEmail}
                    placeholder={"Enter Email"}
                    keyboardType={"email-address"}
                />
                <TextInput
                    style = {styles.loginInput}
                    value = {password}
                    onChangeText={onChangePassword}
                    placeholder={"Enter Password"}
                    keyboardType={"default"}
                    secureTextEntry = {true}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    loginContainer:{
        flex:1,
        backgroundColor:'grey',
        paddingTop:100
    },
    innerText:{
        color:'white',
        fontSize:35,
        marginVertical:10,
        textAlign: 'center'
    },
    continue:{
        color:'white',
        fontSize:25,
        marginTop:50,
        marginBottom:20,
        textAlign: 'center'
    },
    loginInput:{
        backgroundColor:'white',
        height:50,
        marginHorizontal:20,
        marginVertical:10,
        paddingHorizontal:10,
        borderWidth:1
    }
})

export default Login