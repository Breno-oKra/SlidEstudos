import React from "react"
import {View,StyleSheet,Text} from "react-native"

export function LeftActions(){

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Ver Card</Text>
        </View>
    )
   
}
const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        color:"#fff",
        fontSize:40,
        fontWeight:"bold"
    }
})