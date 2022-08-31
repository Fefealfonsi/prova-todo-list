import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Alert, Text, } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <Text>Olá, Fulano</Text>
                <Text style={styles.out}>Sair</Text>
            </View>
            





        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 30,

    },
    userContainer: {
         flexDirection: 'row',
         justifyContent: 'space-between',
         backgroundColor: '#fff',
         borderBottomColor: 'grey',
         borderBottomWidth: 1,
         height:30,
    },
    out: {
        color: 'red'
    }
});