import React from 'react'
import {Form,Row,Col,Button,Container,Card} from "react-bootstrap";
import {useFormik} from "formik";
import {useHistory} from "react-router-dom";
import {Add_Address,Select_Address} from "../Address Reducer/AddressAction";
import  "./Address.css";
import {useDispatch,useSelector} from "react-redux";
import Footer from "../Navbar/Footer";

export default function Address() {
    const dispatch=useDispatch()
    const history=useHistory()
    const state = useSelector(state => state.addressData.address)
    console.log("THIS IS MY ADDRESS",state);

    const formik= useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            address1:'',
            address2:'',
            city:'',
            state:'',
            zip:'',
        },
        onSubmit:(values)=>{
            // alert(JSON.stringify(values))
            dispatch(Add_Address(values))
            dispatch(Select_Address(values))
            history.push('/payment')
            
        }
    })
    const removeHandler=(value)=>{
        dispatch(Select_Address(value))
        history.push('/payment')
    }

    return (
        <div >
        <h1>Address Component</h1>
        <Container>
        <Row>
        {
            state.map((value,id)=>(
              <Col lg={3} md={3} xs={12} style={{margin:"30px"}}>
                <Card className="card-section" key={id} style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title><p><b>First Name :</b>{value.firstName}</p></Card.Title>
                  <Card.Title><p><b>Last Name :</b>{value.lastName}</p></Card.Title>
                  <Card.Title><p><b>Address 1 :</b>{value.address1}</p></Card.Title>
                  <Card.Title><p><b>Address 2 :</b>{value.address2}</p></Card.Title>
                  <Card.Title><p><b>Zip :</b>{value.zip}</p></Card.Title>
                  <Card.Title><p><b>City :</b>{value.city}</p></Card.Title>
                  <Button onClick={()=>removeHandler(value)} variant="primary">Select Address</Button>
                </Card.Body>
              </Card>
              </Col>
            ))
        }
        </Row>
        <div className="address-form">
        <Form onSubmit={formik.handleSubmit} className="actual-form">

  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control name="firstName" onChange={formik.handleChange} value={formik.values.firstName}  placeholder="First Name" required/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Last Name</Form.Label>
      <Form.Control name="lastName" onChange={formik.handleChange} value={formik.values.lasttName}  placeholder="Last Name" required/>
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control name="address1" onChange={formik.handleChange} value={formik.values.address1} placeholder="1234 Main St" required/>
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control name="address2" onChange={formik.handleChange} value={formik.values.address2} placeholder="Apartment, studio, or floor" required/>
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control name="city" onChange={formik.handleChange} placeholder="city" value={formik.values.city} required />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" name="state" onChange={formik.handleChange} value={formik.values.state} defaultValue="INDIA" required>
        <option>Choose...</option>
        <option>INDIA</option>
        <option>BANGLADESH</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control name="zip" onChange={formik.handleChange} value={formik.values.zip} type="number" required/>
    </Form.Group>
  </Form.Row>

    <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>

    <Button  value="Submit" id="reset-button" variant="primary" type="submit">Add Address </Button>
    
    </Form>
      
      </div>
    </Container>
    <Footer/>
        
    

        </div>
    )
}



