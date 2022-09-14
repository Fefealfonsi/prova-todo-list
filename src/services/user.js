import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { BASE_URL } from "../constants/BASE_URL"

export const sigup=(data, passConfirm, setNoConfirm)=>{
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

export const login=(data, navigation)=>{

    const body={
      email:data.email,
      password:data.password
    }
    axios.post(`${BASE_URL}/Auth`, body)
    .then((res)=>{
      AsyncStorage.setItem('token',res.data.token)
      navigation.navigate('Home')
    })
    .catch((err)=>{
      alert(err.message);
    })
  }

  export const logout = (setToken, navigation) => {
    AsyncStorage.removeItem('token')
    setToken('')
    navigation.navigate('Login')
}