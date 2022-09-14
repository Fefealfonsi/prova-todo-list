import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function useProtectedPage({navigation}) {


  const [token, setToken]=useState('')

     await AsyncStorage.getItem('token', (err, item) => {
      setToken(item)
  })
    useEffect(() => {

    if (!token) {
     navigation.navigate("Login");
    }
  }, [navigation]);
  // console.log(token);
  return token //HELP=> queria retornar este tokem para a home, mas devolve um objeto, mesmo que no log, aqui dentro, ele seja uma string,  não entendo o porque.
}
