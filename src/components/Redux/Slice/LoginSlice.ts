import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import { LoginState } from './../../Auth/Dependency';

const initialState: LoginState = {
  phoneNumber: '',
  password: '',
};

const LoginSlice=createSlice({
    name:"login",
    initialState,
    reducers:{
        setPhonenumber:(state,action)=>{
            console.log('phone number:', action.payload);
            state.phoneNumber=action.payload;
        },
        setPassword:(state,action)=>{
            console.log('Password:', action.payload);
            state.password=action.payload;
        },
        resetLogin:(state)=>{
            state.phoneNumber="";
            state.password="";
        },
    }
})

export const {setPhonenumber,setPassword,resetLogin}=LoginSlice.actions
export default LoginSlice.reducer;