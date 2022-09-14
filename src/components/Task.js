import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Alert, Text } from 'react-native';
import ModalDetail from './ModalDetail';
import { useRequestData } from '../hooks/useRequestData';
import { BASE_URL } from '../constants/BASE_URL';

export default function Task(props) {
    const subItens = useRequestData(`${BASE_URL}/ToDos/${props.id}`, undefined, props.token)
    
    return (
        <View  key={props.id} style={styles.container}>
       
            <Text style={styles.title} onPress={()=>props.setDetail(true)}>{props.titulo}</Text>
            <Text style={styles.subtitle}>{subItens&&subItens.items.length} sub-itens</Text>
            {/* HELP=> mesmo passando as informações para o modal de detalhes em cada task ao clicar em cada uma delas as informações presentes no modal é sempre da últimatarefa cadastrada */}
            {props.detail && <ModalDetail setDetail={props.setDetail} token={props.token} id={props.id} titulo={props.titulo} subItens={subItens}/>}
           
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