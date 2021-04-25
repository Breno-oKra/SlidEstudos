import { useNavigation } from "@react-navigation/core";
import React,{useEffect,useState} from "react"
import {View,Text,StyleSheet,SafeAreaView,Image,FlatList,ActivityIndicator} from "react-native"
import {CardsInithial} from "../components/cardInithial"
import {RectButton,RectButtonProps} from "react-native-gesture-handler"
import api from "../servirces/api";
import { Loading } from "../components/loading";


interface CardPros{
  id:number;
  image: string;
  title:string;
  description: string;
  subjects: number;
  tips: number;
  projects: number
}
export function HomeSelect(){
        const[data,setData] = useState<CardPros[]>([])
        const[load,setLoad] = useState(true)
        const[page,setPage] = useState(1)
        const[loadCont,setLoadCont] = useState(false)
        async function getSubjects(){ 
          const {data} = await api.get(`BeckEnd?_sort=title&_order=asc&_page=${page}&_limit=5`)
          if(!data)
            setLoad(true)
          
          if(page > 1){
            setData(oldValue => [...oldValue,...data])
          }else{
            setData(data)
          }
          setLoad(false)
          setLoadCont(false)
          
        }
        function scrollDown(distanceFromEnd:Number){
          if(distanceFromEnd < 1)
            return;
          setLoadCont(true)
          setPage(oldValue => oldValue + 1)
          getSubjects()
        }
        const navigation = useNavigation()
        const handlerSubjects = () => {
          navigation.navigate("Subjects")
        }

        useEffect(()=> {    
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
                <RectButton style={styles.btnAvance} onPress={handlerSubjects}>
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