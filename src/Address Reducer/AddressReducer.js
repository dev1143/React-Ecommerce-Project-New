import * as actionTypes from "./actionTypes";

const InitState={
    address:[],
    removeaddress:[],
    selectaddress:[],
    message:'',
}

export const AddressReducer=(state=InitState,action)=>{
    switch (action.type) {
        case actionTypes.ADD_ADDRESS:
            console.log("MARINE",action.payload.addData);
            const rawAdd=action.payload.addData
            const actAdd=state.address
            actAdd.push(rawAdd)
            return state={
                ...state,
                address:[...actAdd],
        
            }

            case actionTypes.REMOVE_ADDRESS:

            const selData=action.payload.addData
            const delData=state.address
            delData.pop(selData)
                return state={
                    ...state,
                    removeaddress:[...delData]
                }

            case actionTypes.ADD_ADDRESS_FAILURE:
                return state={
                    ...state,
                    message:action.payload.message
                }

            case actionTypes.SELECT_ADDRESS:
            return state={
                ...state,
                selectaddress:action.payload.selectData,
                
            }

        default:
            return state;
    }
}