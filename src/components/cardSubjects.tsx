import React from "react"

import {View,Text,StyleSheet,FlatList} from "react-native"


interface CardPros{
    title:string;
    description:string;
    contCont:[string]            
}
export function CardSubjects({title,description,contCont}:CardPros){
    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={styles.Header}>
                    <View style={styles.HeaderInfo}>
                        <View style={styles.RedSquare}></View>
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
                <Text>conteudos: </Text>
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
        minHeight:130,
        maxHeight:150,
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
        fontSize:18,
        marginLeft:5
    },
    description:{
        fontSize:16,
        color:"#848282"
    },
    boxContents:{
        width:"100%",
        flexDirection:"row",
        paddingHorizontal:10
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
        height:"90%",
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
    RedSquare:{
        width:60,
        height:60,
        backgroundColor:"red"
    }
})

