import Snackbar from 'react-native-snackbar'

interface SnackProps{
    title:string;
    color:string;
    background:string
}
export function SnackAlert({title,color,background}:SnackProps){
        Snackbar.show({
        text: title,
        textColor:color,
        backgroundColor:background,
        duration: Snackbar.LENGTH_SHORT,
        });
    
}