import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Alert, Text, Modal } from 'react-native';
import { Input } from './Input';
import { useForm } from 'react-hook-form'
import { updateTask } from '../services/toDos';
import { deleteTask } from '../services/toDos';
import SubItem from './SubItem'
import NoSubItem from './NoSubItem';
import { useRequestData } from '../hooks/useRequestData';
import { BASE_URL } from '../constants/BASE_URL';
import ModalSubItem from './ModalSubItem';
export default function ModalDetail(props) {

 const [sub, setSub]=useState(false)

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: props.titulo,
        }
    });
    const onSubmit = data => updateTask(data, props.token, props.id)

    const subItens = useRequestData(`${BASE_URL}/ToDos/${props.id}`, undefined, props.token)
    console.log('SUB',subItens);
    const subItensList = subItens && subItens.items.map((item)=>{
        return(
            <SubItem
            id={item.id}
            titulo={item.name}
            token={props.token}
            />

        )
    })
    return (
        <View style={styles.container}>
            <Modal
                animationType='side'
                transparent={true}
            >
                <View style={styles.modal}>
                    <View style={styles.taskContainer}>

                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Detalhe da tarefa {props.titulo} </Text>
                            <Text style={styles.out} onPress={() => props.setDetail(false)}>Fechar</Text>
                        </View>
                        <Input
                            control={control}
                            label={'Título'}
                            type={"name"}
                            errors={errors.name}
                            pattern={/^.{2,}$/}
                            messagePattern={"A tarefa deve conter apenas letras e ter mais que 2 caracteres"}
                            message={" Campo Obrigatório"}
                        />

                        <Button
                            title='Editar tarefa'
                            color='#31bcdd'
                            onPress={handleSubmit(onSubmit)}
                        />
                        <Text style={styles.remove} onPress={() => deleteTask(props.id, props.token)}>Remover Tarefa</Text>
                        <View style={styles.subContainer}>
                            <Text style={styles.text}> Sub-itens</Text>
                            <Text style={styles.add} onPress={() => setSub(true)}>Adicionar</Text>
                        </View>
                            {subItens && subItens.items.length===0?<NoSubItem/>:subItensList}
                            {sub && <ModalSubItem setSub={setSub} token={props.token} id={props.id} />}

                    </View>
                </View>

            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',

    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderBottomColor: '#979a9c',
        borderBottomWidth: 1,
        height: 30,
        marginBottom: 20,

    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderTopColor: '#979a9c',
        borderTopWidth:1,
        height: 30,
        marginTop: 20,

    },
    text:{
        fontWeight: 'bold'

    },
    out: {
        color: '#979a9c',
    },
    remove: {
        marginTop: 20,
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    add:{
        fontWeight: 'bold',
        color:'#31bcdd',
    },
    modal: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        height: '100%',
    },
    taskContainer: {
        backgroundColor: '#fff',
        minHeight:350,
        padding: 30,
        marginTop: 130,
    }

});