import React from 'react'
import {useSelector} from "react-redux";


export default function Profile({item}) {
    const cart = useSelector(state => state.shopData.cart)
    const userName = useSelector(state => state.authData.name)
    const userEmail = useSelector(state => state.authData.mailVerified)
    const tokenData = localStorage.getItem("token")
    
    return (
        <div>
            <h1>PROFILE</h1>
           
            { tokenData ? (
                <>
                <h5>Email :{userEmail}</h5>
                <h5>User Name :{userName}</h5>
                </>
            ): null }
            

            
        </div>
    )
}
