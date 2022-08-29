import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';


export default function Login() {


  const [email, setEmail] = useState(" ")
  const [password, setPassword] = useState(" ")



  const login=()=>{
    const body={
      email:email,
      password:password
    }
    axios
    .post(`${BASE_URL}/api/Auth`, body)
    .then((response)=>{
      console.log(response.data);
    })
    .catch((error)=>{
      Alert(error);
    })
  }

  const enviarLogin=()=>{
    login()
    setPassword("")
    setEmail("")


  }
  return (


    <View style={styles.container}>

        <TextInput
        // value ={email}
        placeholder='E-mail'
        keyboardType='email'
        // onChangeText={(mail)=>{setEmail(mail)}}
        />      
        <TextInput
        // value ={password}
        placeholder='Senha'
        keyboardType='password'
        // onChangeText={(pass)=>{setPassword(pass)}}
        style={styles.input}
        />      

        <Button
        title='Logar'
        onPress={enviarLogin}
        />
        <Button
        title='Ainda não tem cadastro? Clique aqui!'

        />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    fontSize:30,
    color:'black'
  }
});
