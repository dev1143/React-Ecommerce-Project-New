import * as actionTypes from "./actionTypes"

export const Add_Address=(values)=>{
    return(dispatch)=>{
        const token=localStorage.getItem('token')

        if(token !== ''){

            dispatch({type:actionTypes.ADD_ADDRESS,payload:{addData:values}})
            
        }
        else{
            dispatch({type:actionTypes.ADD_ADDRESS_FAILURE,payload:{message:"FAILED TO ADD THE ADDRESS"}})
        }
    }
}

export const Remove_Address=(values)=>{
    return(dispatch)=>{
        const token=localStorage.getItem('token')

        if(token !== ''){

            dispatch({type:actionTypes.REMOVE_ADDRESS,payload:{addData:values}})
            
        }
        else{
            dispatch({type:actionTypes.ADD_ADDRESS_FAILURE,payload:{message:"FAILED TO REMOVE THE ADDRESS"}})
        }
    }
}

export const Select_Address=(values)=>{
    return(dispatch)=>{
        const token=localStorage.getItem('token')

        if(token !== ''){

            dispatch({type:actionTypes.SELECT_ADDRESS,payload:{selectData:values}})
            
        }
        else{
            dispatch({type:actionTypes.ADD_ADDRESS_FAILURE,payload:{message:"FAILED TO REMOVE THE ADDRESS"}})
        }
    }
}
