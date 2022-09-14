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
  return token //ainda devolve um objeto, não entendo o porque?
}
