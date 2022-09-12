import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function useProtectedPage({navigation}) {

    const token = await AsyncStorage.getItem('token');

    
    useEffect(() => {

    if (!token) {
     navigation.navigate("Login");
    }

  }, [navigation]);
  
}
