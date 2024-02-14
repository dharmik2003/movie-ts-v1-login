import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import { SignUpState } from './../../Auth/Dependency';

const initialState: SignUpState = {
    name:"",
    phoneNumber: '',
    email:'',
    password: '',
};

const SignupSlice=createSlice({
    name:"signup",
    initialState,
    reducers:{
        setname:(state,action)=>{
            console.log('name number:', action.payload);
            state.name=action.payload;
        },
        setPhonenumber:(state,action)=>{
            console.log('phone number:', action.payload);
            state.phoneNumber=action.payload;
        },
        setemail:(state,action)=>{
            console.log('email:', action.payload);
            state.email=action.payload;
        },
        setPassword:(state,action)=>{
            console.log('Password:', action.payload);
            state.password=action.payload;
        },
    }
})

export const {setname,setPhonenumber,setemail,setPassword}=SignupSlice.actions
export default SignupSlice.reducer;