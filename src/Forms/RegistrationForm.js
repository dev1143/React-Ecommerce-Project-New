import React from 'react'
import {useHistory} from "react-router-dom";
import {useFormik} from "formik";
import "./style.css";
import {Register} from "../AuthUser/Authaction";
import { useDispatch } from "react-redux";
import {Button} from "react-bootstrap";

function Registration() {

    const dispatch=useDispatch()
    const history=useHistory()
    
    const formik=useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            email:"",
            password:""
        },
        validate:values=>{
            const errors={}

            if(!values.firstname){
                errors.firstname="Required"
            }else if(!/^([a-zA-Z]{5,})+$/i.test(values.firstname)){
                errors.firstname="Not Valid firstname"
                console.log(errors.firstname);
            }

            if(!values.lastname){
                errors.lastname="Required"
            }else if(!/^([a-zA-Z]{5,})+$/i.test(values.lastname)){
                errors.lastname="Not Valid lastname"
            }

            
            if(!values.email){
                errors.email="Required"
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                errors.email="Not Valid email"
            }

            if(!values.password){
                errors.password="Required"
            }else if(values.password.length <=6 ){
                errors.password="Not Valid Password"
            }
            return errors   
        },
        onSubmit: (values)=>{
            console.log(values);
            
            dispatch(Register(values))
            history.push('/login')
            
        }
    })
    return (
        <>
        <h1>Registration Form</h1>
        <form className="wrapper fadeInDown" onSubmit={formik.handleSubmit}>

        <input type="text" style={{padding:"0px 20px"}}   onChange={formik.handleChange} value={formik.values.firstname} name="firstname" placeholder="First Name"/>
        {formik.errors.firstname ? <div style={{color:"red"}}>{formik.errors.firstname}</div>  : null }

        <input type="text"   onChange={formik.handleChange} value={formik.values.lastname}  name="lastname" placeholder="Last Name"/>
        {formik.errors.lastname ? <div style={{color:"red"}}>{formik.errors.lastname}</div> : null}

        <input type="email"  className="fadeIn second" onChange={formik.handleChange} value={formik.values.email} name="email" placeholder="Email Id"/>
        {formik.errors.email ? <div style={{color:"red"}}>{formik.errors.email}</div> : null}

        <input type="password"  className="fadeIn third" onChange={formik.handleChange} value={formik.values.password} name="password" placeholder="Password"/>
        {formik.errors.password ? <div style={{color:"red"}}>{formik.errors.password}</div> : null} 
        
         <Button variant="outline-secondary" className="fadeIn fourth" size="lg" disabled={!(formik.isValid && formik.dirty)} type="submit" style={{width:"15rem"}}>Sign Up</Button><br></br>

        </form>
        </>
    )
}

export default Registration
