import React from 'react'
import {Card,Button} from "react-bootstrap";
import {useSelector,useDispatch} from "react-redux";
import { useHistory } from 'react-router';
import {ProductsDetail} from "../Shopping/ShoppingAction";
import {Container,Row,Col} from "react-bootstrap";
import Footer from "../Navbar/Footer";



export default function Products() {
    const arr1=[]
    const dispatch=useDispatch()
    const history=useHistory()

    const state = useSelector(state => state.shopData)
    const state2=state.products
    const images=state.products.map((d)=>{

            return ("IMAGES ONLY",arr1.unshift(d.image))
        
    })
    console.log("FIND IMAGE HERE",images);

    console.log("ARRAY OF ALL IMAGES",arr1[0])
    
   console.log("ORIGINAL",state2);

    const handler=(proId)=>{
        dispatch( ProductsDetail(proId))
        history.push(`/productdetails/${proId}`)
    }
    const style={
        marginTop:"10px",
        width:"65%",
        height:"50%",
        alignItems: 'center',
    }
    const style1={
        width:"65%",
        height:"65%",  
    }

    return (
        <div>
            <Container>
                <Row>
            {
                state2.map((prod)=>(

                <Col lg={4} md={4} xs={12}>
                <Card style={style}>
                <Card.Img style={style1} src={prod.image} />
                <Card.Body>
                <Card.Title>${prod.price}</Card.Title>
                <Card.Title><p>{prod.category}</p></Card.Title>
                
                <Button  variant="outline-primary" style={{alignText:"center"}} onClick={()=>handler(prod.id)}>View Details</Button>
                </Card.Body>
                </Card>
                </Col> 
                ))
            }
                
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}
