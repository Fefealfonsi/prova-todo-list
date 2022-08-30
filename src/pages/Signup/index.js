import React from 'react'
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

export default function Signup({navigation}){

    return(
       
    <View style={styles.container}>

    <Text style={styles.title}>popopoppo</Text>
      <Text style={styles.textInput}>Email</Text>
      <TextInput
      // value ={email}
      keyboardType='email'
      style={styles.input}
      // onChangeText={(text)=>{setEmail(text)}}
      />   
      <Text style={styles.textInput}>Senha</Text>

      <TextInput
      // value ={password}
      keyboardType='password'
      // onChangeText={(text)=>{setPassword(text)}}
      style={styles.input}
      />      

      <Button
      title='Acessar'
      style={styles.button}
      color='#31bcdd'
      // onPress={enviarLogin} 
      />
       <Text style={styles.login} onPress={()=>navigation.navigate('Login')}>Já tenho uma conta</Text>

       
    
  </View>
);
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
login:{
  color:'blue',
  fontSize:16,
  textAlign:'center',
  color:'#31bcdd',
  marginTop:20,
  fontWeight:'bold',
}
});
