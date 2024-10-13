import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:"todo",
    initialState:{
        tasks:[],
        counter:0,
        isEditable:false,//initial value
        record:{},
    },//It will contain tasks in json objects form and state will have access to it using useSelector hook
    reducers:{
        add:(state,action)=>{
            state.tasks.push(action.payload)
            console.log(action.payload)
        },
        remove: (state, action)=>{
            const id = action.payload
            state.tasks=  state.tasks.filter(item=>item.id!==id)
        },
        update: (state,action)=>{ 
            const {id, Name,Email} = action.payload
            state.tasks = state.tasks.map(item=> item.id === id ? {...item,Name:Name, Email:Email }: item)
        },
        incrementCounter:(state)=>{
            state.counter = state.counter +1
        },
        editChange:(state, action)=>
        {
            state.isEditable = action.payload
        },
        updateRecord: (state, action)=>{
            const{id,name,email} = action.payload
            state.record = {id,name,email}
        }
    }
})

export const {add,remove, update, incrementCounter,updateRecord,editChange } = todoSlice.actions

export default todoSlice.reducer
