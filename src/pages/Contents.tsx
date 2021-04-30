import React, { useRef } from "react"
import {View, Text, StyleSheet, Image} from "react-native"
import {Modalize,} from "react-native-modalize"
export function Content(){
    const modalize = useRef<Modalize>()
    
    function onOpen(){
        modalize.current?.open() 
    }
    return(
        <View style={styles.container}>
             <View style={styles.header}>
                <Text style={styles.title}>Express</Text>
                <Text>Usando Express</Text>
            </View>
           
            <View style={styles.contImage}>
                <Image style={styles.image} resizeMode="stretch" source={{uri:"https://www.mediafire.com/convkey/9c06/pcgr4ow24cjf7nqzg.jpg"}} />
            </View>

            <Modalize
            ref={modalize}
            snapPoint={180}
            modalHeight={600}
            alwaysOpen={50}
            HeaderComponent={
                <View style={styles.ModelAlign}>
                    <Text style={styles.titleModel}>Sobre</Text>
                </View>
            }
            >  
                <View style={styles.modal}>
                    <Text>faça isso otario</Text>
                </View>
                
            </Modalize>
           
           
        
        </View>
        
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        alignItems:"center"
    },
    header:{
        width:"100%",
        height:"15%",
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20
    },
    title:{
        fontSize:22
    },
    contImage:{
        width:"100%",
        height:"70%"
    },
    image:{
        width:"100%",
        height:"100%",
    },
    boxDescription:{
        width:"100%",
        height:"10%",
        backgroundColor:"#FFF"
    },
    btnEscolha:{
        width:"100%",
        height:"100%",
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center"
    },
    infos:{
        backgroundColor:"green"
    },

    ModelAlign:{
        width:"100%",
        height:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#34495e",
        
    },
    modal:{
        flex:1,
        height:600,
        justifyContent:"center",
        alignItems:"center"
    },
    titleModel:{
        color:"#fff",
        fontSize:18,

    },
    texts:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    btns:{
        width:"100%",
        height:"10%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"pink"
    }

})