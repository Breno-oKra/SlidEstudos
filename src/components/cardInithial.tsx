import React from "react"
import {View,Text, StyleSheet,Image} from "react-native"

interface CardPros{
    image: string;
    title:string;
    description: string;
    subjects: number;
    tips: number;
    projects: number;
}
export function CardsInithial({image,title,description,subjects,tips,projects}:CardPros){
    return(
        <View style={styles.container}>
            <View style={styles.boxHeader}>
                <View style={styles.imageCont}>
                    <Image style={styles.image} source={{uri:`${image}`}} />
                </View>
                <View style={styles.campText}>
                    <Text style={styles.title}>{title}</Text>
                    <Text>{description}</Text>
                </View>
                
            </View>
            <View style={styles.conts}>
                <View style={styles.contAlign}>
                    <Text style={styles.redSquare}></Text>
                    <Text>{subjects} materias</Text>
                </View>
                <View style={styles.contAlign}>
                    <Text style={styles.blueSquare}></Text>
                    <Text>{tips} dicas</Text>
                </View>
                <View style={styles.contAlign}>
                    <Text style={styles.greenSquare}></Text>
                    <Text>{projects} projetos</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width:"90%",
        height:"100%",
        padding:5,
        backgroundColor: "rgba(255, 255, 255,0.3)",
        borderRadius:10,
    },
    boxHeader:{
        width:"100%",
        height:"70%",
        flexDirection:"row",
    },
    imageCont:{
        width:"30%",
        height:"100%",
    },
    image:{
        width:"80%",
        height:"100%",
        borderRadius:40,
    },
    campText:{
        width:"70%",
        height:"100%",
        justifyContent:"space-around",
    },
    title:{
        fontSize:18,
        marginLeft:15
    },
    conts:{
        width:"100%",
        height:"30%",
        flexDirection:"row"
    },
    contAlign:{
        width:"33%",
        height:"100%",
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row"
    },
    redSquare:{
        width:20,
        height:20,
        backgroundColor:"#E31212"
    },
    blueSquare:{
        width:20,
        height:20,
        backgroundColor:"#0DB2F9"
    },
    greenSquare:{
        width:20,
        height:20,
        backgroundColor:"#0EFA96"
    }
})