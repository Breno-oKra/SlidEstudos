import { useNavigation } from "@react-navigation/core";
import React,{useEffect,useState} from "react"
import {View,Text,StyleSheet,SafeAreaView,Image,FlatList,ActivityIndicator,Alert} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {CardsInithial} from "../components/cardInithial"
import {RectButton} from "react-native-gesture-handler"
import { api} from "../servirces/api";
import { Loading } from "../components/loading";
import { SnackAlert } from "../components/alert";


interface CardPros{
  id:number;
  image: string;
  title:string;
  description: string;
  subjects: number;
  tips: number;
  projects: number;
  conts: NextPageProps[]
}
interface NextPageProps{
  id:string,
  category: string;
  title:string,
  description : string,
  contCont:[string]
}


export function HomeSelect(){
       
        const[data,setData] = useState<CardPros[]>()
        const[load,setLoad] = useState(true)
        const[loadCont,setLoadCont] = useState(false)

       
        
    
        function scrollDown(distanceFromEnd:Number){
          if(distanceFromEnd < 1)
            return;
          setLoadCont(true)
        }
     
        const navigation = useNavigation()
        const handlerSubjects = (conts:NextPageProps[],capaSubject:string) => {
          navigation.navigate("Subjects", {conts,capaSubject})
        }
        async function getSubjects(){
          setTimeout(async() => {
            if(!data){
              const newdate = await AsyncStorage.getItem("@slidEstudos:subjects")
              console.log(newdate)    
              if(newdate === null ){ 
                  setTimeout(() => SnackAlert({title:"Ola Breno, sua Api está Offline e não ah nada salvo no banco de dados interno do dispositivo",color:"#fff",background:"#ff7675"}),10000)
                  return setLoad(true)

              }else{ 
                const data =JSON.parse(newdate);
                setData(data)
               
              }
              setLoad(false)
              setLoadCont(false)
              
            }else{
              console.log('breno 2')
              return;
              
            }
          },2500)
          
        }
        useEffect(()=> { 
          async function viewBd() {          
            await fetch("http://192.168.31.22:3333").then(async function(response) {
              
              if(response.ok) {
                const { data } = await api.get("BeckEnd")
                try{
                  if(!data){
                    return setLoad(false)      
                  }else{
                    setData(data)
                    SnackAlert({title:"Ola Breno, sua Api está Online",color:"#fff",background:"#7bed9f"})
                    await AsyncStorage.setItem("@slidEstudos:subjects", JSON.stringify(data))
                    setLoad(false)
                  }
                }catch(err){
                  Alert.alert("Erro ao Recuperar Api Usando Banco de Dados Interno do Dispositivo")
                  getSubjects()
                }
                
              }
            })
            .catch(function(error) {
              SnackAlert({title:"Ola Breno, sua Api está Offline,Tentando Reconectar",color:"#fff",background:"#ff7675"})
              viewBd()
            });      
          }      
          viewBd()
          getSubjects()
          
        },[])
    

        return (
          <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={require("../../assets/headerInithial.png")}/>
            
            <Text style={styles.title}>Beckend</Text>
            
            <View style={styles.content}>
              {
                load ? 
                <Loading /> 
                :
                <FlatList 
              data={data}
              renderItem={({item}) => (
                <RectButton style={styles.btnAvance} onPress={() => handlerSubjects(item.conts,item.image)}>
                  <CardsInithial image={item.image} title={item.title} description={item.description} subjects={item.subjects} tips={item.tips} projects={item.projects} />
                </RectButton>
              )}
              contentContainerStyle={styles.contFlatList}
              showsVerticalScrollIndicator={false}
              onEndReachedThreshold={0.1}
              onEndReached={({distanceFromEnd}) => scrollDown(distanceFromEnd)}
              />
              }{
               loadCont ?
                        <ActivityIndicator color={"green"} />
                        : <></>
              }
            </View>
          </SafeAreaView>
        );  
}
const styles = StyleSheet.create({
    container:{
      position:"relative",
      flex:1,
      backgroundColor:"#E6E5E5",
      alignItems:'center'
    },
    colors:{
        color:"#000"
    },
    image:{
      width:"100%",
      height:"30%",
    },
    title:{
      position:"absolute",
      top:40,
      fontSize:50,
      fontWeight:"bold",
      color:"#fff",
    },
    content:{
      width:"100%",
      height:"78%",
      alignItems:"center",
      marginTop:-80,
    },
    btnAvance:{
      backgroundColor:"#fff",
      width:"100%",
      height:140,
      marginBottom:20,
      borderRadius:10
    },
    contFlatList:{
      width:"100%",
      alignItems:"center"
    }
})