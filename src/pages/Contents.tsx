import React, { useState } from "react"

import {View, Text, StyleSheet, Image,Dimensions} from "react-native"
import {Modalize} from "react-native-modalize"
import AppIntroSlider from "react-native-app-intro-slider"
import { useNavigation, useRoute } from "@react-navigation/core"
import ImageZoom from "react-native-image-pan-zoom"
import Icon from "react-native-vector-icons/MaterialIcons"
import { TouchableOpacity } from "react-native-gesture-handler"
interface SlideProps{
        key:number;
        title:string,
        image:string,
        text: string
    
}
interface slideRenderProps{
    item:{
        key:number;
        title:string,
        image:string,
        text: string
    }
    
}
export function Content(){
    const routes = useRoute()
    const navigation = useNavigation()
    const slide =  JSON.stringify(routes.params as SlideProps)
    const slides = JSON.parse(slide)
    const[showMode,setShowMode] = useState<boolean>(false)    

    function appRender({item}:slideRenderProps){
        
        return(
            <View style={styles.containerSlides}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="chevron-left" size={70} color="#353b48"  />
                    </TouchableOpacity>
                    <Text style={styles.title}>{item.title}</Text>
                    
                </View>
                <View  style={styles.contImage}>
                    <ImageZoom cropWidth={Dimensions.get('window').width } cropHeight={Dimensions.get('window').height - 200}
                    imageWidth={Dimensions.get('window').width - 50}
                    imageHeight={Dimensions.get('window').height - 400}>
                        <Image resizeMode="contain" style={styles.image} source={{uri:`${item.image}`}} />
                    </ImageZoom>  
                </View>
                <View style={styles.onModal}>
                    <Modalize
                        snapPoint={0}
                        modalHeight={700}
                        alwaysOpen={290}
                        >  
                            <View style={styles.modal}>
                            <View style={styles.ModelAlign}>
                                    <Text style={styles.titleModel}>Sobre</Text>
                                </View>
                                <View style={styles.containerModal}>
                                    <Text>{item.text}</Text>
                                </View>
                                
                            </View>
                            
                    </Modalize> 
                </View>
                
            </View>
        )
    }
    if(showMode){
        return;
    }else{
    return(
        <View style={styles.container}>
            <AppIntroSlider
            renderItem={appRender}
            data={slides}
            activeDotStyle={{
                backgroundColor:"grey",
                width:30,
                height:15
            }}
             />
            
           
        </View>
       
        
    )}
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#000"
    },
    containerSlides:{
        width:"100%",
        height:"80%",
    },
    header:{
        width:"100%",
        height:"15%",
        flexDirection:"row",
        backgroundColor:"#fff",
        alignItems:"center",
    },
    title:{
        width:"80%",
        padding:10,
        fontSize:21,
        fontWeight:"bold",
    },
    contImage:{
        width:"100%",
        height:"90%"
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
    onModal:{
        position:"absolute",
        top:"50%",
        width:"100%",
        height:"100%",
    },
    modal:{
        flex:1,
        height:500
    },
    ModelAlign:{
        width:"100%",
        height:"15%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",
        borderRadius:50    
    },
    containerModal:{
        width:"100%",
        height:"80%",
        alignItems:"center",
        justifyContent:"center"
    },
    titleModel:{
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