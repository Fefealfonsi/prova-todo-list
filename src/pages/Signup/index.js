import React,{useState, useEffect} from 'react'
import { StyleSheet, View, TextInput, Button, Text} from 'react-native';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';
import { useForm } from 'react-hook-form'
import { Input } from '../../components/Input';


export default function Signup({navigation}){
  
  const[passConfirm, setPassConfirm]=useState('')
  const[noConfirm, setNoConfirm]=useState(false)
  
  console.log(noConfirm);
  const {control, handleSubmit,formState: {errors} } = useForm({
    defaultValues: {
      name:'',
      email:'',
      password:''
    }
  });
  const onSubmit = data => sigup(data);
  

   
   const sigup=(data)=>{
      if(data.password===passConfirm){

        setNoConfirm(false)
        const body={
          name:data.name,
          email:data.email,
          password:data.password
        }
        
        axios.post(`${BASE_URL}/Users`, body)
        .then((res)=>{
          alert("Cadastrado com sucesso!")
          navigation.navigate('Login')
        })
        .catch((err)=>{
          alert(err.message)
        })
      }else{
        setNoConfirm(true)

      }
  }

  
   
    return(
       
    <View style={styles.container}>

    <Text style={styles.title}>Cadastro</Text>
    <Input
      control={control}
      label={"Nome"}
      type={"name"}
      errors={errors.name}
      pattern={ /^[a-zA-Z ]{2,}$/}
      messagePattern={"O nome deve conter apenas letras e ter mais que 2 caracteres"}
      message={"Nome obrigatório"}
      />
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
      message={"Senha obrigatório"}
      />
      <Text style={styles.textInput}>Confirme a senha</Text>
       <TextInput
          value={passConfirm}
          keyboardType="password"
          style={noConfirm?styles.borderError:styles.input}
          onChangeText={(a) => {setPassConfirm(a)}}
        />
         {noConfirm&&<Text style={styles.errorMessage}>Senhas diferentes</Text>}
        <Button
        title='Cadastrar'
        style={styles.button}
      
        color='#31bcdd'
        onPress={handleSubmit(onSubmit)} />
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
  // textAlign: 'center',
  // marginTop: 2,
}
});
