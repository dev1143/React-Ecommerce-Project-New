import {combineReducers} from "redux";
import {ShoppingReducer} from "../Shopping/ShoppingReducer";
import {authReducer} from "../AuthUser/Authreducer";
import {AddressReducer} from "../Address Reducer/AddressReducer";

const rootReducer=combineReducers({
    shopData:ShoppingReducer,
    authData:authReducer,
    addressData:AddressReducer
})

export default rootReducer;