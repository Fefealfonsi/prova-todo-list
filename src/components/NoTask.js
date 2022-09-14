import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Button, Alert, Text } from 'react-native';

export default function NoTask(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Não há tarefas!</Text>
            <Text style={styles.subtitle}>Clique em cadastrar tarefa para começar a se organizar</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   padding:30,
    //   textAlign:'center',
      
    }, 
    title:{
       color:'#979a9c', 
       fontSize:25,
       textAlign:'center',
       marginTop:30,
       marginBottom:20,
       fontWeight: "bold"
    },
    subtitle:{
        color:'#979a9c', 
        fontSize:18,
        textAlign:'center',
        
     
    }
});