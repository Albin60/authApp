import React,{useState} from "react";
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'

const Login=()=>{
    const[username, setUsername]=useState("")
    const[password, setPassword]=useState("")
    const Handle= async()=>{
        try{
            const pergjigjja= await fetch("https://dummyjson.com/auth/login", {
                method:"POST",
                headers:{'Content-Type':"application/json"},
                body:JSON.stringify({
                    username:username,
                    password:password
                }),
                credentails:"omit"
            })
            const data= await pergjigjja.json()
            console.log(data)
        }
        catch(err){

        }
    }
    return(
        <View>
            <Text>Welcome to fake api call</Text>
            <TextInput
                placeholder="username"
                autoCapitalize="none"
                value={username}
                onChangeText={text=>setUsername(text)}
            />
            <TextInput
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={true}
                value={password}
                onChangeText={text=>setPassword(text)}
            />
            <Button title="Login" onPress={Handle}/>
        </View>
    )
}

export default Login