import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Button, Alert, Text } from 'react-native';
import { deleteItem } from '../services/toDos';
export default function SubItem(props){
    return(
        <View style={styles.container} key={props.id}>
            <Text numberOfLines={1} style={styles.text}>{props.titulo}</Text>
            <Text  style={styles.remove} onPress={()=>deleteItem(props.id, props.token)}> Remover</Text>
            

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent: 'space-between',
        borderRadius:5,
        padding:10,
        marginTop:20,
        borderColor:'#979a9c',
        borderWidth:1,
    },
    text:{
        flex:1,
        fontWeight: 'bold',
        color:'black',
        overflow:'hidden',
        
        
        
    },
    remove:{
        color:'red',
    }
});