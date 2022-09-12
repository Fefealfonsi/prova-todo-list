import React, { useState, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../pages/Login/index'
import Signup from '../pages/Signup/index'
import Home from '../pages/Home/index'


const Stack = createNativeStackNavigator()

export default function Navigator() {

    return (

        <Stack.Navigator>

            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Signup"
                component={Signup}
            />



        </Stack.Navigator>
    )

}
