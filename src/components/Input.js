import React from 'react'
import { StyleSheet, View, TextInput, Button, Alert, Text } from 'react-native';
import { Controller} from 'react-hook-form'
export function Input(props){
    

    return(
        <View>
            <Text style={styles.textInput}>{props.label}</Text>
        <Controller 
        control={props.control} 
        rules={{
          required:true,
          pattern:{
            value:props.pattern,
            message:props.messagePattern
          }
          
        }} 
        render={(
          {field:{onChange, onBlur,value}}
        )=>(<TextInput
          style={props.errors?styles.borderError:styles.input }
          value ={value}
          onBlur={onBlur}
          keyboardType= {props.type}
          onChangeText={onChange}
         
          />)}
          name={props.type}
          />
           {props.errors&& <Text style={styles.errorMessage}>{props.errors.message?props.errors.message:props.message}</Text>}
         
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding:30,
      
    },
    input:{
     padding:5,
      color:'black',
      borderColor:'grey',
      borderRadius:5,
      borderWidth:1,
      marginBottom:20,
    },
    textInput:{
      fontWeight:'bold',
      marginBottom:10,
    },
    title:{
      fontSize:30,
      marginBottom:50,
      fontWeight:'bold',
    },
    signup:{
      color:'blue',
      fontSize:16,
      textAlign:'center',
      color:'#31bcdd',
      marginTop:20,
      fontWeight:'bold',
    },
     
    borderError: {
      borderWidth: 1,
      borderColor: 'rgba(200,0,50,1)',
      borderRadius:5,
      borderWidth:1,
      padding:5,
    
    },
    errorMessage: {
      fontSize: 12,
      color: 'rgba(200,0,50,1)',
    //   textAlign: 'center',
    //   marginTop: 5,
      
  
    }
  });
  