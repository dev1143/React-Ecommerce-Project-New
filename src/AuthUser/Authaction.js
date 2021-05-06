import {authAction} from "./authactiontypes"
import axios from "axios"

export const Register=(user)=>{
    return (dispatch)=>{
        console.log("JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ");

        // dispatch({type:`${authAction.USER_REGISTER}_REQUEST`})
        axios.post("https://api09.herokuapp.com/register",user).then((res)=>{
            const data1=res.data
            console.log("REGISTER DATA",data1);
            dispatch({type:`${authAction.USER_REGISTER}_SUCCESS`,payload:{regdata:data1}})
        })
        .catch((err)=>{
            console.log("ERROR",err);
            dispatch({type:`${authAction.USER_REGISTER}_FAILURE`,payload:{error:"REGISTRATION FAILED"}})
        })
    }
}

export const Login=(user)=>{
    return (dispatch)=>{
        axios.post("https://api09.herokuapp.com/login",user)
        .then((res)=>{
            const data1=res.data
            console.log("LOGIN DATA ",data1);
            const msg=res.data.message
            window.localStorage.setItem("token",res.data.token)
            window.localStorage.setItem("name",res.data.full_name)
            window.localStorage.setItem("email",res.data.email)
            dispatch({type:`${authAction.USER_LOGIN}_SUCCESS`,
            payload:{logdata:data1,userToken:res.data.token,message:msg,mail:res.data.email,userName:res.data.full_name}})
        })
        .catch((err)=>{
            console.log("ERROR",err);
            dispatch({type:`${authAction.USER_LOGIN}_FAILURE`,payload:{error:"LOGIN FAILED"}})
        })
    }
}

export const Logout=()=>{
    return (dispatch)=>{
        const out=localStorage.getItem("token")

        if( out !== "" ){
            localStorage.clear()
            dispatch({type:`${authAction.USER_LOGOUT}_SUCCESS`,payload:{message:"LOGOUT SUCCESS"}})
        }
        else{
            dispatch({type:`${authAction.USER_LOGOUT}_FAILURE`,payload:{message:"LOGOUT FAILURE"}})
        }

    }
}
