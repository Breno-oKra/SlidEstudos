import axios from "axios"
import React,{useState} from "react"
// 3333 é a porta que estamos definindo


export const api = axios.create({
    baseURL:"http://192.168.31.22:3333"
})

