import {authAction} from "./authactiontypes";

const InitState={
    registration:[],
    login:[],
    authentiCated:false,
	authenticating:"",
    mailVerified:"",
    name:'',
    message:''
}

export const authReducer=(state=InitState,action)=>{
    switch (action.type) {
        case `${authAction.USER_REGISTER}_SUCCESS`:
            return state={
                ...state,
                message:action.payload.message,
                registration:action.payload.regdata
            }

        case `${authAction.USER_REGISTER}_FAILURE`:
            return state={
                ...state,
                error:action.payload.error
            }
        case `${authAction.USER_LOGIN}_SUCCESS`:
            console.log("Login State",state);
            return state={
                ...state,
                authentiCated:true,
                authenticating:action.payload.userToken,
                login:action.payload.logdata,
                message:action.payload.message,
                mailVerified:action.payload.mail,
                name:action.payload.userName
            }

        case `${authAction.USER_LOGIN}_FAILURE`:
            return state={
                ...state,
                error:action.payload.error
            }

        case `${authAction.USER_LOGOUT}_SUCCESS`:
            return state={
                ...state,
                authentiCated:false,
                message:action.payload.message
            }

        case `${authAction.USER_LOGOUT}_FAILURE`:
            return state={
                ...state,
                message:action.payload.message
            }
        default:
            return state;
    }
}

