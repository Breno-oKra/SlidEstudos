import React from "react"

import {View,Text,StyleSheet,FlatList} from "react-native"


interface CardPros{
    category:string;
    title:string;
    description:string;
    contCont:[string]            
}
export function CardSubjects({title,description,contCont,category}:CardPros){
    const squareRed = category == "materia"
    const squareBlue = category == "dica"
    const squareGreen = category == "projeto"
    return(
        <View style={[styles.container,squareRed && styles.materia || squareBlue && styles.dica || squareGreen && styles.projeto]}>
            <View style={styles.containerHeader}>
                <View style={styles.Header}>
                    <View style={styles.HeaderInfo}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <View style={styles.contentSlides}>
                    <View style={styles.contAlign}>
                        <Text style={styles.textSlides}>Slides</Text>
                        <Text style={styles.numberSlides}>9</Text>
                    </View>
            
                </View>

            </View>  
            <View style={styles.boxContents}>
                <Text style={styles.textCont}>conteudos: </Text>
                <FlatList 
                data={contCont}
                horizontal
                keyExtractor={(item) => String(item)}
                renderItem={({item}) => (
                    <Text style={styles.textInfos}>{item}</Text>
                )}
                />
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width:"90%",
        height:"100%",
        flexDirection:"column",
        backgroundColor:"#fff",
        borderRadius:7,
        
    },
    containerHeader:{
        width:"100%",
        height:"70%",
        flexDirection:"row",
        padding:5,
        justifyContent:"center",
        alignItems:"center",
    },
    Header:{
        width:"55%",
        height:"100%",
    },
    HeaderInfo:{
        width:"100%",
        flexDirection:"row",
        marginBottom:10
    },
    title:{
        fontSize:22,
        marginLeft:5,
    },
    description:{
        fontSize:15,
        color:"#fff"
    },
    boxContents:{
        width:"100%",
        flexDirection:"row",
        paddingHorizontal:10
    },
    textCont:{
        fontSize:17,
        color:"#fff"
    },
    flatlist:{
        flexDirection:"row"
    },
    textInfos:{
        padding:4,
        backgroundColor:"grey",
        color:"#fff",
        marginHorizontal:5,
        marginBottom:8,
        borderRadius:8
    },
    contentSlides:{
        width:"40%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    contAlign:{
        width:"60%",
        height:"80%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#E4E4E4",
        borderRadius:8
    },
    textSlides:{
        fontSize:18,
        flex:1
    },
    numberSlides:{
        width:"100%",
        height:"70%",
        fontSize:40,
        textAlign:"center", 
    },
    square:{
        width:60,
        height:60,
    },
    materia:{
        backgroundColor:"#E31212",
    },
    dica:{
        backgroundColor:"#0DB2F9"
    },
    projeto:{
        backgroundColor:"#0EFA96"
    }
})

