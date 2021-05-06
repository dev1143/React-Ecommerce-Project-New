import React from 'react'
import {useFormik} from "formik";
import "./style.css"
import {useDispatch, useSelector} from "react-redux";
import {Login} from "../AuthUser/Authaction";
import {useHistory,Link} from "react-router-dom";
import {Button} from "react-bootstrap";

function Login1() {

    const dispatch=useDispatch()

    const history=useHistory()

    const auth=useSelector(state=>state.authData.authentiCated)

    const auth1=useSelector(state=>state.authData)

    console.log("DAKHO SBAI",auth1);

    const formik=useFormik({
        initialValues:{
            email:"",
            password:""
        },

        onSubmit:values=>{
            // const data1={emailfun,passfun}
            const  data=values
            console.log(data);

                dispatch(Login(data))
                console.log("this is login");
                
        }
    })

    if(auth === true){
        history.push('/address')
    }

    return (
        <>
        <h1>Login Form</h1>

        <form className="wrapper fadeInDown" onSubmit={formik.handleSubmit}>

        <input type="email"  className="fadeIn second" onChange={formik.handleChange} value={formik.values.email} name="email" placeholder="Email Id"/>
        
        <input type="password"  className="fadeIn second" onChange={formik.handleChange} value={formik.values.password} name="password" placeholder="Password"/>

        <Button variant="outline-secondary" size="lg" type="submit" style={{width:"15rem"}}>Log In</Button><br></br>
        <span>New User ?<a href="#home"><Link to="/registration"> Sign Up Here</Link></a></span>
        </form>
        </>
    )
}

export default Login1