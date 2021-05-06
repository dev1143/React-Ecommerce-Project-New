import * as actionTypes from "./ShoppingTypes"

const InitState={
    productHome:[],
    category:[],
    products:[],
    singleData:[],
    cart:[],
    selected:false,
    currentValue:null
}

export const ShoppingReducer=(state=InitState,action)=>{
    switch(action.type){

        case  actionTypes.PRODUCT_HOME:
            return state={
                ...state,
                productHome:action.payload.home
            }
        case actionTypes.PRODUCT_CATEGORY:
            return state={
                ...state,
                category:action.payload.cata
            }

        case actionTypes.PRODUCT_VIEW:
            return state={
                ...state,
                products:action.payload.pdata
            }

        case actionTypes.PRODUCT_DETAILS:
            return state={
                ...state,
                singleData:action.payload.sdata
                
            }
        case actionTypes.PRODUCT_ADD_HOME:
            const item1=state.productHome.find((pro)=>pro.id === action.payload.id)            
            const inCart1=state.cart.find((item1)=>item1.id === action.payload.id ? true: false)
            return state={
                ...state,
                cart: inCart1
                ? state.cart.map((item1) =>
                    item1.id === action.payload.id
                      ? { ...item1, qty: item1.qty + 1 }
                      : item
                  )
                : [...state.cart, { ...item1, qty: 1 }],
            }

        case actionTypes.ADD_TO_CART:
            const item=state.products.find((pro)=>pro.id === action.payload.id)            
            const inCart=state.cart.find((item)=>item.id === action.payload.id ? true: false)
            return state={
                ...state,
                cart: inCart
                ? state.cart.map((item) =>
                    item.id === action.payload.id
                      ? { ...item, qty: item.qty + 1 }
                      : item
                  )
                : [...state.cart, { ...item, qty: 1 }],
            }
        case actionTypes.DELETE_FROM_CART:
            return state={
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            }   
        case actionTypes.ADJUST_QUANTITY:
            return state={
                ...state,
                cart: state.cart.map((item) =>
                  item.id === action.payload.id
                    ? { ...item, qty: +action.payload.qty }
                    : item
                ),
            }        
        default :
        return state
    }
    

}









// cart:inCart ? state.cart.map((item)=>item.id===action.payload.id ?{...item,qty:item.qty+1}
// :item)
//  :[...state.cart,{...item, qty:1}]




// const nerd=state.singleData
//             const cartData=state.cart
//             cartData.push(nerd)

//             console.log("CART CART CART",nerd);