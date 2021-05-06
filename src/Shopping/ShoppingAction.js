import * as actionTypes from "./ShoppingTypes"
import axios from "axios"

export const ProductHome=()=>{
    return(dispatch)=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            const homeData=res.data
            console.log("PRODUCTS HOME",homeData);
            dispatch({type:actionTypes.PRODUCT_HOME,payload:{home:homeData}})
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}

export const ProductCategory=()=>{
    return (dispatch)=>{
        axios.get("https://fakestoreapi.com/products/categories")
        .then((res)=>{
            const data=res.data
            console.log("PRODUCT CATEGORY",data);
            dispatch({type:actionTypes.PRODUCT_CATEGORY,payload:{cata:data}})
        })
        .catch(err=>{
            console.log(err);
        })
    }
}


export const Products=(detail)=>{
    return (dispatch)=>{
        axios.get(`https://fakestoreapi.com/products/category/${detail}`)
        .then((res)=>{
            const data=res.data
            console.log("PRODUCT VIEW",data);
            dispatch({type:actionTypes.PRODUCT_VIEW,payload:{pdata:data}})
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

export const ProductsDetail=(data)=>{
    return (dispatch)=>{
        axios.get(`https://fakestoreapi.com/products/${data}`)
        .then((res)=>{
            const data=res.data
            console.log("PRODUCT VIEW",data);
            dispatch({type:actionTypes.PRODUCT_DETAILS,payload:{sdata:data}})
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
export const addToHomeCart=(itemID)=>{
    return{
        type:actionTypes.PRODUCT_ADD_HOME,
        payload:{
            id:itemID
        }
    }
}

export const addToCart=(itemID)=>{
    return{
        type:actionTypes.ADD_TO_CART,
        payload:{
            id:itemID
        }
    }
}

export const removeFromCart=(itemID)=>{
    return{
        type:actionTypes.DELETE_FROM_CART,
        payload:{
            id:itemID
        }
    }
}

export const adjustquantity=(itemID,value)=>{
    return{
        type:actionTypes.ADJUST_QUANTITY,
        payload:{
            id:itemID,
            qty:value
        }
    }
}

// export const loaditem=(item)=>{
//     return{
//         type:actionTypes.ADJUST_QUANTITY,
//         payload:item
//     }
// }