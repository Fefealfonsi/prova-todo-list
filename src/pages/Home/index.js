import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TextInput, Button, Alert, Text, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { useRequestData } from '../../hooks/useRequestData';
import Task from '../../components/Task';
import NoTask from '../../components/NoTask';
import { BASE_URL } from '../../constants/BASE_URL';
import ModalTask from '../../components/ModalTask';
import { logout } from '../../services/user';
import ModalDetail from '../../components/ModalDetail';
export default function Home({ navigation }) {

    
    const [token, setToken] = useState('')
    const [modal, setModal] = useState(false)
    const [detail, setDetail] = useState(false)
    // const [data, setData]= useState('')
    useProtectedPage(navigation)

    useEffect(() => {
        (async () => {
            AsyncStorage.getItem('token', (err, token) => {
                setToken(token)
                // console.log("ITEM=>", token)
                // HELP=>mais uma tentativa de pegar as informações do usuário contidas no token.
                // const decoded = jwt_decode(token);
                // setData(decoded)
            })
        })();
    }, [])

    console.log('TOKkEN=>', token)
   
    const tasks = useRequestData(`${BASE_URL}/ToDos`, undefined, token)
    
    // console.log("CASTASK",tasks);

    const tasksList = tasks && tasks.items.map((task) => { 
        return (
            <Task
                id={task.id}
                titulo={task.name}
                token={token}
                setDetail={setDetail}
                detail={detail}
             
            />
        )
    })


    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <Text>Olá Fulano </Text>
                <Text style={styles.out} onPress={()=>logout(setToken, navigation)}>Sair</Text>
            </View>
            <Button
                title='Cadastrar tarefa'
                color='#31bcdd'
                onPress={() => setModal(true)}
            />
            {tasks? tasksList : <NoTask />}
            {modal && <ModalTask setModal={setModal} token={token}  />}
           

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
        borderBottomColor: '#979a9c',
        borderBottomWidth: 1,
        height: 30,
        marginBottom: 20,
    },
    out: {
        color: 'red'
    }

});