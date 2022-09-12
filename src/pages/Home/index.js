import React,{useState, useEffect} from 'react'
import { StyleSheet, View, TextInput, Button, Alert, Text, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useProtectedPage } from '../../hooks/useProtectedPage';
// import { getTokenData } from '../../services/getTokenData';
// import jwt_decode from 'jwt-decode';
export default function Home({navigation}) {

  useProtectedPage(navigation)
 
  const [token, setToken]= useState('')
//   const [data, setData]= useState('')

  useEffect(()=>{
     (async()=>{ 
         AsyncStorage.getItem('token', (err, item) =>{ 
            setToken(item)
            
            console.log("ITEM=>",item)
            // const decoded = jwt_decode(token);
            // setData(decoded)
        })
    })();
},[])

// console.log('DATAA',data); 
    console.log('TOKkEN=>',token);
   const logout=()=>{
        AsyncStorage.removeItem('token')
        setToken('')
        console.log('Deslogou');
        navigation.navigate('Login')
    }
  

    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <Text>Olá </Text>
                <Text style={styles.out} onPress={logout}>Sair</Text>
            </View>
                {token?<Text>{token} </Text>:<Text>não tem</Text>}
        
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 30,

    },
    userContainer: {
         flexDirection: 'row',
         justifyContent: 'space-between',
         backgroundColor: '#fff',
         borderBottomColor: 'grey',
         borderBottomWidth: 1,
         height:30,
    },
    out: {
        color: 'red'
    }
});