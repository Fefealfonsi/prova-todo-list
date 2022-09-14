import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Alert, Text } from 'react-native';
import ModalDetail from './ModalDetail';

export default function Task(props) {
   
    return (
        <View  key={props.id} style={styles.container}>
       
            <Text style={styles.title} onPress={()=>props.setDetail(true)}>{props.titulo}</Text>
            <Text style={styles.subtitle}>5 sub-itens</Text>
            {props.detail && <ModalDetail setDetail={props.setDetail} token={props.token} id={props.id} titulo={props.titulo}/>}
           
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderRadius:5,
        padding:20,
        marginTop:20,
        borderColor:'#979a9c',
        borderWidth:1,
    },
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: "bold"
    },
    subtitle: {
        color: '#979a9c',
    }
});