import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Button, Alert, Text } from 'react-native';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';

export default function Login({navigation}) {

  const [email, setEmail] = useState(" ")
  const [password, setPassword] = useState(" ")



  const login=()=>{

    const body={
      email:email,
      password:password
    }
    axios
    .post(`${BASE_URL}/Auth`, body)
    .then((res)=>{
      console.log(res.data);
      Alert(res.data);
    })
    .catch((err)=>{
      Alert(err.message)
    })
  }

  const enviarLogin=()=>{
    login()
    setPassword("")
    setEmail("")


  }
  return (


    <View style={styles.container}>

      <Text style={styles.title}>Acessar</Text>
        <Text style={styles.textInput}>Email</Text>
        <TextInput
        value ={email}
        keyboardType='email'
        style={styles.input}
        onChangeText={(text)=>{setEmail(text)}}
        />   
        <Text style={styles.textInput}>Senha</Text>

        <TextInput
        value ={password}
        keyboardType='password'
        onChangeText={(text)=>{setPassword(text)}}
        style={styles.input}
        />      

        <Button
        title='Acessar'
        style={styles.button}
        color='#31bcdd'
        onPress={enviarLogin} />
         <Text style={styles.signup} onPress={()=>navigation.navigate('Signup')}>Criar uma conta</Text>

         
      
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
  signup:{
    color:'blue',
    fontSize:16,
    textAlign:'center',
    color:'#31bcdd',
    marginTop:20,
    fontWeight:'bold',
  }
});
