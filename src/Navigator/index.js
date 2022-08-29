import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack' 
import Login from '../pages/Login/index'

const Stack = createNativeStackNavigator()

const Navigator=()=>{
    <Stack.Navigator>
        <Stack.Screen
        name="Login"
        component={Login}
        />

    </Stack.Navigator>
    
}
export default Navigator