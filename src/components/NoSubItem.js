import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Button, Alert, Text } from 'react-native';

export default function NoSubItem(){
    return(
        <View >
            <Text style={styles.title}>Não há sub-itens!</Text>
            <Text style={styles.subtitle}>Clique em adicionar para começar a se organizar</Text>
        </View>
    )
}
const styles = StyleSheet.create({
   
    title:{
       color:'#979a9c', 
       textAlign:'center',
       marginTop:30,
       fontWeight: "bold"
    },
    subtitle:{
        color:'#979a9c', 
        fontSize:13,
        textAlign:'center',
        
     
    }
});