import { BASE_URL } from "../constants/BASE_URL"
import axios from 'axios'
import { useRequestData } from "../hooks/useRequestData"
import AsyncStorage from "@react-native-async-storage/async-storage"



export const createTask=(data, token)=>{
    const auth = { headers: { Authorization: 'Bearer ' + token } }
    const body={name:data.name}
    axios.post(`${BASE_URL}/ToDos`,body,auth)
    .then((res)=>{
        alert('Tarefa cadastrada com sucesso')
        

        // useRequestData(`${BASE_URL}/ToDos`,undefined,auth)
    })
    .catch((err)=>{
        alert(err.message)
    })
}

export const deleteTask=(id, token)=>{
    const auth = { headers: { Authorization: 'Bearer ' + token } }
    axios.delete(`${BASE_URL}/ToDos/${id}`,auth)
    .then((res)=>{
        alert('Tarefa Excluida com sucesso')
    })
    .catch((err)=>{
        alert(err.message)
    })

}
export const updateTask=(data, token, id)=>{
    const auth = { headers: { Authorization: 'Bearer ' + token } }
    const body={name:data.name}
    axios.put(`${BASE_URL}/ToDos/${id}`,body,auth)
    .then((res)=>{
        alert('Tarefa editada com sucesso')
    })
    .catch((err)=>{
        alert(err.message)
    })
}
export const createItem=(data, token, id)=>{
    const auth = { headers: { Authorization: 'Bearer ' + token } }
    const body={name:data.name}
    axios.post(`${BASE_URL}/ToDos/${id}/items/add`,body,auth)
    .then((res)=>{
        alert('Sub-item cadastrado com sucesso')
    })
    .catch((err)=>{
        alert(err.message)
    })
}
export const deleteItem=(id, token)=>{
    const auth = { headers: { Authorization: 'Bearer ' + token } }
    axios.delete(`${BASE_URL}/ToDos/items/remove/${id}`,auth)
    .then((res)=>{
        alert('Sub-item excluido com sucesso')
    })
    .catch((err)=>{
        alert(err.message)
    })

}