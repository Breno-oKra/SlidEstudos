import { useNavigation, useRoute } from "@react-navigation/core"
import React, { useState } from "react"
import {View,TouchableOpacity, Image,StyleSheet,FlatList,Modal,Text,Pressable,KeyboardAvoidingView,TouchableWithoutFeedback} from "react-native"
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { TextInput } from "react-native-gesture-handler"
import { CardSubjects } from "../components/cardSubjects"
import Icon from "react-native-vector-icons/MaterialIcons"
import { Modals } from "../components/modal"
interface NextPageProps{
    id:string,
    category:string;
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
    const navigation = useNavigation()
    const {capaSubject} = routes.params as SubjectCapa
    const data = conts
    const[filterDate,setFilterDate] = useState(conts)
    const [modalVisible, setModalVisible] = useState(false);
    const[filter,setFilter] = useState<number>(0)

    function filteredConts(filter:string){
        if(filter == "todos"){
            setFilter(0)
            return setFilterDate(data)
        }
        const filtered = data.filter(item => item.category.includes(filter))
       
        if(filter == 'dica')
            setFilter(1)
        if(filter == 'materia')
            setFilter(2)
        if(filter == "projeto")
            setFilter(3)
        setFilterDate(filtered)
        setModalVisible(false)

    }
    const labels = [
        {label:"Todos", value:"todos"},
        {label:"Dicas", value:"dica"},
        {label:"Materias", value:"materia"},
        {label:"Projetos", value:"projeto"}
    ]
    function content(cont:NextPageProps){
        navigation.navigate("Contents",cont.contCont)
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={{uri:`${capaSubject}`}} />
                
            </View>
            <View style={styles.boxCont}>
                <View style={styles.search}>
                    <View style={styles.boxSearch}>
                        <TextInput style={styles.input} placeholder="breno" />
                        <Icon name="search" size={30} color="grey" style={styles.icons} />
                    </View>
                    <TouchableOpacity style={styles.iconsFilter} onPress={() => setModalVisible(true)}>
                        <Icon name="filter-alt" size={40} color="grey" />
                    </TouchableOpacity>    
                </View>
                <FlatList 
                data={filterDate}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => content(item)} style={styles.content}>
                        <CardSubjects  title={item.title} description={item.description} contCont={item.contCont} category={item.category}/>
                    </TouchableOpacity>
                        
                )}
                showsVerticalScrollIndicator={false}
                />
                <KeyboardAvoidingView>
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                            setModalVisible(!modalVisible);
                            }}>
                                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                                    <View style={styles.containerModal}>
                                        <View style={styles.ModelAlign}>
                                            <Text style={styles.titleModel}>Escolha um metodo de filtro</Text>
                                            <RadioForm
                                                radio_props={labels}
                                                initial={filter}
                                                onPress={(value) => {
                                                    filteredConts(value)
                                                }}
                                                
                                                />
                                        </View>
                                    </View>
                                    
                                </TouchableWithoutFeedback>
                        </Modal>
                </KeyboardAvoidingView> 
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    header:{
        width:"100%",
        height:250
    },
    image:{
        width:"100%",
        height:"100%",
        opacity:0.8
    },
    boxCont:{
        marginTop:-80,
        width:"100%",
        height:"80%",
        alignItems:"center", 
    },
    contFlat:{
        width:"100%",
        height:300,
        backgroundColor:"blue",
        padding:20
    },
    title:{
        fontSize:25,
        color:"#fff",
        marginBottom:20
    },
    search:{
        width:"90%",
        height:60,
        justifyContent:"space-around",
        alignItems:"center",
        marginBottom:25,
        flexDirection:"row"
    },
    boxSearch:{
        width:"80%",
        height:"100%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",
        borderRadius:20,
    },
    icons:{
        backgroundColor:"#fff",
        width:"10%",
        height:"50%",
        justifyContent:"center",
        alignItems:"center"
    },
    iconsFilter:{
        backgroundColor:"#fff",
        width:"10%",
        height:"60%",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
    },
    input:{
        width:"85%",
        height:"90%",
        paddingHorizontal:20,
        fontSize:17
    },
    content:{
        width:"100%",
        minHeight:140,
        maxHeight:180,
        alignItems:"center",
        marginBottom:20
    },
    containerModal:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(255,255,255,0.7)"
    },
    ModelAlign:{
        width:"70%",
        height:"25%",
        backgroundColor:"#DCDCDC",
        borderRadius:10,
        justifyContent:"space-around",
        alignItems:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    titleModel:{
        fontSize:17,
        fontWeight:"bold"

    }
   
})