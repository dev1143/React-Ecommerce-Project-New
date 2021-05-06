import React from 'react'
import {Form,Row,Col,Button} from "react-bootstrap";
import {useFormik} from "formik";
import Footer from "../Navbar/Footer";
import './Address.css'

export default function Payment() {

    const formik = useFormik({
        initialValues: {
          cardName: '',
          cardNumber: '',
          cvvNumber: '',
          expiryDate:'',
        },
        onSubmit: values => {
          alert(JSON.stringify(values));
        },
      });

    return (
        <div>
            <h1> Payment Information</h1>
            <div className="payment-gateway">
            <Row>
            <form onSubmit={formik.handleSubmit}>
                <Col lg={12} md={12} xs={12}>

            <Row>
              <Col lg= {6} md={6} xs={12}>
            <Form.Group controlId="formGridAddress1">
            <p>CARD NAME :</p>
            <Form.Control className="card-name" name="cardName" placeholder="Name Of the Card" onChange={formik.handleChange} value={formik.values.cardName}/>
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
            <p>CARD NUMBER :</p>
            <Form.Control className="card-name" name="cardNumber" placeholder="Number Of the Card" onChange={formik.handleChange} value={formik.values.cardNumber}/>
            </Form.Group>
            </Col>
            

            <Col lg={6} md={6} xs={12}>
            <Form.Group controlId="formGridAddress1">
            <p>CVV NUMBER :</p>
            <Form.Control className="card-name" name="cvvNumber" placeholder="CVV" onChange={formik.handleChange} value={formik.values.cvvNumber}/>
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
            <p>Expiry Date :</p>
            <Form.Control className="card-name" name="expiryDate" placeholder="Expiry Date" onChange={formik.handleChange} value={formik.values.expiryDate} />
            </Form.Group>
            </Col>
            </Row>
            <Button variant="primary" size="lg" type="submit">Next</Button>

            

            </Col>
            </form>    
            </Row>
            </div>
            <Footer/>
        </div>
    )
}
