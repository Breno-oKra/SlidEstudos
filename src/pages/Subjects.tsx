import { useRoute } from "@react-navigation/core"
import React, { useState } from "react"
import {View,Text, Image,StyleSheet,FlatList} from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { CardSubjects } from "../components/cardSubjects"

interface NextPageProps{
    id:string,
    title:string,
    description : string,
    contCont:[string]
}
interface Params{
    conts:NextPageProps[]
}

interface SubjectCapa{
    capaSubject:string
}
export function Subject(){
    const routes = useRoute()
    const {conts} = routes.params as Params

    const {capaSubject} = routes.params as SubjectCapa
    const[data,setData] = useState(conts)
    console.log(data)
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={{uri:`${capaSubject}`}} />
            </View>
            <View style={styles.boxCont}>
                <View style={styles.search}>
                    <TextInput style={styles.input} placeholder="breno" />
                </View>
                <FlatList 
                data={data}
                
                renderItem={({item}) => (
                    <View style={styles.content}>
                        <CardSubjects  title={item.title} description={item.description} contCont={item.contCont}/>
                    </View>
                        
                )}/>
                    
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    },
    header:{
        width:"100%",
        height:300,
    },
    image:{
        width:"100%",
        height:"100%",
        opacity:0.8
    },
    boxCont:{
        marginTop:-100,
        width:"100%",
        height:500,
        alignItems:"center",     
    },
    title:{
        fontSize:25,
        color:"#fff",
        marginBottom:20
    },
    search:{
        width:"100%",
        height:60,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:25
    },
    input:{
        width:"85%",
        height:"90%",
        backgroundColor:"#fff",
        borderRadius:20,
        paddingHorizontal:20
    },
    content:{
        width:"100%",
        minHeight:180,
        maxHeight:190,
        alignItems:"center",
        marginBottom:20
    }
})