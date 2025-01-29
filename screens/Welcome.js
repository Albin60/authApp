import React from "react";
import { StyleSheet, Text, View } from "react-native"; 
import { ImageBackground } from "react-native-web";
import { Button } from 'react-native-web'


const Welcome=({route})=>{
    const{username}=route.params || {}
    return(
        <View style={style.container}>
            <Text style={style.title}>Welcome
                {username ?`, ${username}`:""}

            </Text>
        <Button
          title="Faqja"
          onPress={() => Alert.alert('Simple Button pressed')}
        />

        </View>
    )
}

const style = StyleSheet.create({

    container:{
        flex:1,
        paddingTop:80,
        paddingHorizontal:20,
        backgroundColor:"fff"
    },
    title:{
        fontSize:24,
        marginBottom:20,
        textAlign:"center"
    }
})

export default Welcome;