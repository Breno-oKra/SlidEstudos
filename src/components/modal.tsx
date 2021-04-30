import React,{useState} from "react"
import {View,StyleSheet,Text,Pressable,Modal} from "react-native"
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
export function Modals(){
    const[radioValue,setRadioValue] = useState()
    
    console.log(radioValue)
    const labels = [
        {label:"Todos", value: 0},
        {label:"Dicas", value:1},
        {label:"Materias", value:2},
    ]
    return(
        
            <View style={styles.container}>
                <Text style={styles.title}>Escolha um metodo de filtro</Text>
                <RadioForm
                    radio_props={labels}
                    initial={0}
                    onPress={(value) => {setRadioValue(value)}}
                    
                    />
            </View>

    )
}
const styles = StyleSheet.create({
    container:{
        width:"70%",
        height:"30%",
        backgroundColor:"#ECECEC",
        borderRadius:10,
        justifyContent:"space-around",
        alignItems:"center",
    },
    title:{
        fontSize:17,
        fontWeight:"bold"

    }
})