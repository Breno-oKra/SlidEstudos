import React from "react"
import {View,StyleSheet,Text} from "react-native"
import LottieView from "lottie-react-native"
import Loadin from "../assets/load.json"

export function Loading(){
    return(
        <View style={styles.container}>
            <LottieView source={Loadin} autoPlay loop style={styles.animation}  />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"90%",
        justifyContent:"center",
        alignItems:"center",
    },
    animation:{
        backgroundColor:"transparent",
        width:300,
        height:300
    }
})
