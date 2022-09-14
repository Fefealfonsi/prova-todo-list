import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Alert, Text, Modal } from 'react-native';
import { Input } from './Input';
import { useForm } from 'react-hook-form'
import { createTask } from '../services/toDos';
export default function ModalTask(props) {


  const {control, handleSubmit,formState: {errors} } = useForm({
    defaultValues: {
      name:'',
      
    }
  });
  const onSubmit = data => createTask(data, props.token);
  
  
    return (
        <View style={styles.container}>
            <Modal
                animationType='side'
                transparent={true}

            >
                <View style={styles.modal}>
                    <View style={styles.taskContainer}>

                        <View style={styles.textContainer}>
                            <Text>Cadastrar tarefa </Text>
                            <Text style={styles.out} onPress={() => props.setModal(false)}>Fechar</Text>
                        </View>
                        <Input
                        control={control}
                        label={"Título"}
                        type={"name"}
                        errors={errors.name}
                        pattern={/^.{2,}$/}
                        messagePattern={"A tarefa deve conter apenas letras e ter mais que 2 caracteres"}
                        message={" Campo Obrigatório"}
                        />

                        <Button
                            title='Cadastrar tarefa'
                            color='#31bcdd'
                            onPress={handleSubmit(onSubmit)}
                        />

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
    out: {
        color: '#979a9c',
    },
    modal: {
       
        // marginTop: 500,
        backgroundColor: 'rgba(0,0,0,0.3)',
        height: '100%',
    },
    taskContainer:{
        backgroundColor:'#fff',
        height:230,
        padding:30,
        marginTop:130,
    }
    
});