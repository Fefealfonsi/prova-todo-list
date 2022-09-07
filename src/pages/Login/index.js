import React from 'react'
import { StyleSheet, View, TextInput, Button, Alert, Text } from 'react-native';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';
import {useForm } from 'react-hook-form'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input } from '../../components/Input';
export default function Login({navigation}) {


  const {control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const onSubmit = data => login(data);

  
  const login=(data)=>{
    
    const body={
      email:data.email,
      password:data.password
    }
   
    axios.post(`${BASE_URL}/Auth`, body)
    .then((res)=>{
      console.log('Logou');
      AsyncStorage.setItem('token',res.data.token)
      navigation.navigate('Home')
     
    })
    .catch((err)=>{
      
      alert(err.message);
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acessar</Text>
      <Input
      control={control}
      label={"Email"}
      type={"email"}
      errors={errors.email}
      pattern={/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i}
      messagePattern={"Formato de e-mail invalido"}
      message={"Email obrigatório"}
      />
      <Input
      control={control}
      label={"Senha"}
      type={"password"}
      errors={errors.password}
      pattern={/^.{6,}$/}
      messagePattern={"Mínimo de 6 caracteres"}
      message={"Senha obrigatória"}
      />
              
        <Button
        title='Acessar'
        style={styles.button}
        color='#31bcdd'
        onPress={handleSubmit(onSubmit)} />
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
  
});
