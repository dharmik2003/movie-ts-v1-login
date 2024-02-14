import { PhoneNumber } from "react-phone-number-input";

export interface LoginState {
    phoneNumber: string,
    password: string
}
export interface SignUpState {
    name:string
    phoneNumber: string,
    email:string,
    password: string,
}