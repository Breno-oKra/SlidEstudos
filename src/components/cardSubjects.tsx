import React,{useState} from "react"

import {View,Text,StyleSheet,FlatList,ImageBackground,Modal,KeyboardAvoidingView,TouchableWithoutFeedback} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"


interface CardPros{
    category:string;
    title:string;
    description:string;
    contCont:[string];
    slides:number         
}
export function CardSubjects({title,description,contCont,category,slides}:CardPros){
    const squareRed = category == "materia"
    const squareBlue = category == "dica"
    const squareGreen = category == "projeto"
    const [modalVisible, setModalVisible] = useState(false);
    function onModalInfos(){

    }
    return(
        <ImageBackground source={require("../../assets/studyBakcground.png")} style={[styles.container,squareRed && styles.materia || squareBlue && styles.dica || squareGreen && styles.projeto]}>
            <View style={styles.containerHeader}>
                <View style={styles.contentSlides}>
                    <View style={styles.contAlign}>
                        <Text style={styles.textSlides}>Slides</Text>
                        <Text style={styles.numberSlides}>{slides}</Text>
                    </View>
                
                </View>
                <View style={styles.Header}>
                    <View style={styles.HeaderInfo}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <Text style={styles.description}>{description}</Text>
                </View>
                

            </View>  
            <TouchableOpacity style={styles.btnContents} onPress={() => setModalVisible(true) }>
                <Text style={styles.textBtn}>Ve Conteudos Abordados</Text>
            </TouchableOpacity>
               
            <KeyboardAvoidingView>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                    >   
                    <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                        <View style={styles.modal}>
                            <View style={styles.flatModal}>
                                <FlatList 
                                    data={contCont}
                                    keyExtractor={(item) => String(item)}
                                    renderItem={({item}) => (
                                        <Text style={styles.textInfos}>{item}</Text>
                                    )}
                                />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        flexDirection:"column",
        padding:10
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
        width:"80%",
        height:"100%",
    },
    HeaderInfo:{
        width:"100%",
        flexDirection:"row",
    },
    title:{
        width:"100%",
        backgroundColor:"#535c6840",
        fontSize:20,
        fontWeight:"bold",
        marginLeft:5,
        color:"#fff"
    },
    description:{
        
        fontSize:15,
        color:"#fff"
    },
    btnContents:{
        width:"100%",
        height:"50%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#535c688C",
        borderRadius:10
    },
    textBtn:{
        fontSize:17,
        color:"#fff"
    },
    textCont:{
        fontSize:17,
        color:"#fff"
    },
    flatlist:{
        flexDirection:"row"
    },
  
    contentSlides:{
        width:"20%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        marginRight:10
    },
    contAlign:{
        width:"90%",
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
    materia:{
        backgroundColor:"#eb4d4b",
    },
    dica:{
        backgroundColor:"#0DB2F9"
    },
    projeto:{
        backgroundColor:"#0EFA96"
    },
    modal:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(255,255,255,0.7)"
    },
    flatModal:{
        width:"80%",
        height:"60%",
        justifyContent:"center",
        alignItems:"center",
    },
    textInfos:{
        textAlign:"center",
        padding:15,
        fontSize:20,
        fontWeight:"bold",
        backgroundColor:"#2f3640",
        color:"#fff",
        marginHorizontal:5,
        marginBottom:8,
        borderRadius:8,  
    },
})

